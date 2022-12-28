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

const DashboardScreen = props => {
 

  const renderItem = ({item}) => {
    return (
      
    <Text>Articles</Text>
    );
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
           
          
          />
        </View>
       
        {/* <FlatList
          style={{marginTop: 20}}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({



  viewSearch: {
    margin: 10,
  },
  input: {
    backgroundColor:'white',
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

});

export default DashboardScreen;
