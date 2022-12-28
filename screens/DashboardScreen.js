import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Label,
  FlatList,
  ActivityIndicator,
  Pressable,
  Button,
  StatusBar,
  TextInput,
  SafeAreaView,
  Linking,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ant from 'react-native-vector-icons/AntDesign';
import {getAllArticles} from '../store/actions/articles-actions';
import {articlesActions} from '../store/slices/articles-slice';

const DashboardScreen = props => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const {
    articles,
    searchedArticles,
    articleStatus,
    searchField,
    error,
    loading,
  } = useSelector(state => state.articles);

  const articlesToDispaly = searchField ? searchedArticles : articles;
  useEffect(() => {
    dispatch(getAllArticles(page));
  }, [dispatch, page]);

  // {searchedArticles.length===0 && <Text>Not founddddddd</Text>}

  const renderItem = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Pressable
          style={styles.container}
          onPress={() => Linking.openURL(`${item.web_url}`)}
          android_ripple={{
            color: '#D2ABDB',
          }}>
          <View style={{padding: 20, borderRadius: 40}}>
            {/*    title */}
            <Text style={styles.title}>{item.headline.main}</Text>

            {/*    description */}
            <Text style={styles.description} numberOfLines={3}>
              {item.abstract}
            </Text>

            <View style={styles.data}></View>
            {/*     source */}
            <View style={{marginTop: 10}}>
              <Text>
                source: <Text style={styles.source}>{item.source}</Text>
              </Text>
            </View>
          </View>
        </Pressable>
      </SafeAreaView>
    );
  };
  const renderLoader = () => {
    return loading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.viewSearch}>
          {/* <Ant name="search1" size={25} style={styles.item} /> */}
          <TextInput
            placeholder="Search..."
            id="search"
            style={styles.input}
            onChangeText={value =>
              dispatch(articlesActions.searchArticle(value))
            }
          />
        </View>
        {error && articleStatus === 'failed' && (
          <Text style={styles.error}>{error}</Text>
        )}
        {articlesToDispaly.length === 0 && searchField && (
          <Text style={styles.error}>no search articles founddd</Text>
        )}
        {articlesToDispaly.length === 0 &&
          articleStatus === 'success' &&
          !searchField && <Text style={styles.error}>no articles founddd</Text>}

        <FlatList
          style={{marginTop: 20}}
          data={articlesToDispaly}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          onRefresh={() => dispatch(getAllArticles(page))}
          refreshing={loading}
        
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#121212',
    padding: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  listText: {
    fontSize: 16,
    color: '#FFF',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    marginTop: 10,
    color: '#A629C2',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  date: {
    fontWeight: 'bold',
    color: '#e63946',
    fontSize: 15,
  },
  source: {
    color: '#8C49A3',
  },
  formControl: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 40,
    width: '100%',
  },
  viewSearch: {
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 10,
    color: '#000',
    borderWidth: 1,
    width: '75%',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  error: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default DashboardScreen;
