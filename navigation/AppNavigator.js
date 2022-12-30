import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { LoginNavigator ,DashboardNavigator } from './ScreenNavigator';


 const AppNavigator = (props) => {

    const {token}=useSelector(state=>state.login);

    return(  
        <NavigationContainer>
        {token ? <DashboardNavigator /> : <LoginNavigator />}
      </NavigationContainer>
        );
};

export default AppNavigator;

