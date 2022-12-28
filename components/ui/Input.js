import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

function Input(props) {
  return (
    <View style={styles.buttomView}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput {...props} style={styles.input} required />
    </View>
  );
}
const styles = StyleSheet.create({
  buttomView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  label: {
    marginVertical: 2,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%',
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
});
export default Input;
