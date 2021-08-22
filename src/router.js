import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false
}

const Routes = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false}}
        />  

        <Stack.Screen
          name="Detail"
          component={Detail}
          
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;



