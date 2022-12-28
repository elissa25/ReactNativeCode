import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import {screenOptions as loginOptions} from '../screens/LoginScreen';
import {screenOptions as dashboardOptions} from '../screens/DashboardScreen';
import {Button, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../store/slices/login-slice';
import {articlesActions} from '../store/slices/articles-slice';

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

const DashboardStackNavigator = createNativeStackNavigator();

export const DashboardNavigator = props => {
  const dispatch = useDispatch();
  return (
    <DashboardStackNavigator.Navigator>
      <DashboardStackNavigator.Screen
        name="Articles"
        component={DashboardScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'italic',
          },
          headerStyle: {backgroundColor: '#A629C2', color: 'white'},
          headerRight: () => (
            <TouchableOpacity
              style={{
                backgroundColor: '#D2ABDB',
                shadowOffset: {width: 1, height: 10},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                // shadowColor:'#00acee',
                elevation: 5,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                marginHorizontal: 20,
                marginVertical: 10,
                borderWidth: 1,
                borderColor: '#D2ABDB',
                width: 80,
              }}
              onPress={() => {
                dispatch(loginActions.Logout());
                dispatch(articlesActions.Reset());
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#FFFFFF',
                  letterSpacing: 0.5,
                }}>
                Logout
              </Text>
            </TouchableOpacity>
         
          ),
        }}
      />
    </DashboardStackNavigator.Navigator>
  );
};
