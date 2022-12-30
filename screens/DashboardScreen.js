import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getAllArticles} from '../store/actions/articles-actions';
import {articlesActions} from '../store/slices/articles-slice';

import Article from '../components/article/Article';
import SearchInput from '../components/article/SearchInput';
import Error from '../components/ui/Error';
import Loading from '../components/ui/loading';

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
    empty
  } = useSelector(state => state.articles);

 
  const articlesToDispaly = searchField ? searchedArticles : articles;
  useEffect(() => {
    dispatch(getAllArticles(page));
  }, [dispatch,page]);


  const renderItem = ({item}) => {
    return (
      <Article
        url={item.web_url}
        title={item.headline.main}
        description={item.abstract}
        source={item.source}
      />
    );
  };


  const onChangeText=(value) =>{
    dispatch(articlesActions.searchArticle(value))
  }

  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <SearchInput onChangeText={onChangeText}
        value={searchField}
            />
        
        {error && articleStatus === 'failed' && <Error error={error}/> }

        {articlesToDispaly.length === 0 && searchField && (
          <Error error="no searched articles were found"/> 
        )}
        {articlesToDispaly.length === 0 &&
          articleStatus === 'success' &&
          !searchField && <Error error="no articles founded"/> }

        <FlatList
          style={{marginTop: 20}}
          data={articlesToDispaly}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          onEndReached={ (empty.length===0 || searchField) ? null :()=>{ setPage(page + 1);} }
          onEndReachedThreshold={0}       
          onRefresh={error && (() => dispatch(getAllArticles(page)))}
          refreshing={loading}
        />
        {loading && <Loading />}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
export default DashboardScreen;
