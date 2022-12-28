import React from 'react';
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
import Colors from '../../constants/Color';
function Article(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Pressable
      style={styles.container}
      onPress={() => Linking.openURL(`${props.url}`)}
      android_ripple={{
        color: Colors.lightMauve,
      }}>
      <View style={{padding: 20, borderRadius: 40}}>
        {/*    title */}
        <Text style={styles.title}>{props.title}</Text>

        {/*    description */}
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>

        <View style={styles.data}></View>
        {/*     source */}
        <View style={{marginTop: 10}}>
          <Text>
            source: <Text style={styles.source}>{props.source}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  </SafeAreaView>
  );
}
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
      color: Colors.mauve,
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
      color: Colors.darkMauve,
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
export default Article;
