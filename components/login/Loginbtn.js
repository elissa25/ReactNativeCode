import React from 'react';
import {View, StyleSheet, Text, TouchableNativeFeedback} from 'react-native';

import Colors from '../../constants/Color';

function Loginbtn(props) {
  return (
    <View style={[styles.bottomContainer]}>
      <TouchableNativeFeedback
        {...props}
        disabled={props.disabled}
        onPress={props.onPressbtn}
        background={TouchableNativeFeedback.Ripple()}
        >
        <View style={[styles.button, props.style]} testID={props.testID}   >
          <Text  style={styles.buttonText}> {props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: Colors.mauve,
  },
  buttonText: {
    borderRadius: 35,
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  bottomContainer: {
    borderRadius: 35,
    justifyContent: 'center',
    padding: 20,
  },
});

export default Loginbtn;
