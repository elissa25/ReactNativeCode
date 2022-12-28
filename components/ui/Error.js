import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

function Error(props) {
  return (
   <Text style={styles.errors}>{props.error}</Text>
  );
}
const styles = StyleSheet.create({
    errors: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 5,
      },
});
export default Error;
