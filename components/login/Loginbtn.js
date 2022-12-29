import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Colors from '../../constants/Color';
function Loginbtn(props) {
  return (
    <View style={[styles.bottomContainer]}>
      <Pressable
        onPress={props.onPressbtn}
        android_ripple={{
          color: Colors.lightMauve,
          borderless: true,
        }}
        style={[
          styles.button,
          props.style
        ]}>
        <Text style={styles.buttonText}> Login</Text>
      </Pressable>
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
