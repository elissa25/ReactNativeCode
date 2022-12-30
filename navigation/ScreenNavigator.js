import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TouchableNativeFeedback, Text,View} from 'react-native';
import {useDispatch} from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import {screenOptions as loginOptions} from '../screens/LoginScreen';
import {loginActions} from '../store/slices/login-slice';
import {articlesActions} from '../store/slices/articles-slice';
import Colors from '../constants/Color';

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
            fontSize:30,
          },
          headerStyle: {backgroundColor: Colors.mauve, color: 'white'},
          headerRight: () => (
            <TouchableNativeFeedback
             
              background={TouchableNativeFeedback.Ripple()}
              onPress={() => {
                dispatch(loginActions.Logout());
                dispatch(articlesActions.Reset());
              }}>
                <View  style={{
                backgroundColor: Colors.lightMauve,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                marginHorizontal: 20,
                marginVertical: 10,
                borderWidth: 1,
                borderColor: Colors.lightMauve,
                width: 80,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: Colors.mauve,
                  letterSpacing: 0.5,
                }}>
                Logout
              </Text>
              </View>
            </TouchableNativeFeedback>
         
          ),
        }}
      />
    </DashboardStackNavigator.Navigator>
  );
};
