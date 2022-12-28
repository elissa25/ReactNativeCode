import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';

import {screenOptions as loginOptions} from '../screens/LoginScreen';

const LoginStackNavigator = createNativeStackNavigator();

export const LoginNavigator = props => {
  return (
    <LoginStackNavigator.Navigator>
      <LoginStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={loginOptions}
      />
    </LoginStackNavigator.Navigator>
  );
};

