import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function SearchInput(props) {
  return (
    <View style={styles.viewSearch}>
      <TextInput
        placeholder="Search..."
        id="search"
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewSearch: {
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 10,
    color: '#000',
    borderWidth: 1,
    width: '90%',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20
  },
});
export default SearchInput;
