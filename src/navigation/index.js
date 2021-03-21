import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {getAsyncStorage} from '../utils/asyncStorage';
import {AppStack} from '../screens';

const AppNavigation = props => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
