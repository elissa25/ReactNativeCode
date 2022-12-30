import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Error(props) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errors}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Error;
