import React from 'react';
import {View, StyleSheet, ActivityIndicator } from 'react-native';

function Loading(props) {
  return (
    <View style={styles.loaderStyle}  >
          <ActivityIndicator testID={props.testID} size="large" color="#aaa"  />
        </View>
  );
};

const styles = StyleSheet.create({
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
      },
});

export default Loading;
