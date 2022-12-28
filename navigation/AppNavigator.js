import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LoginNavigator  } from './ScreenNavigator';


 const AppNavigator = (props) => {

    

    return(  
        <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
        );
};
export default AppNavigator;

