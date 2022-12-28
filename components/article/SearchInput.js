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
    paddingHorizontal: 2,
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
  },
});
export default SearchInput;
