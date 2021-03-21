import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Dishes from './Home/dishes';

const Stack = createStackNavigator();

export const AppStack = props => {
  return <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShown: true,
          title: 'Home',
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Dishes"
        component={Dishes}
        options={{
          headerShown: true,
          headerTitleAlign: 'center'
        }}
      />
  </Stack.Navigator>;
};
