import React from 'react';
import {SafeAreaView, StatusBar, Text, TextInput} from 'react-native';
import AppNavigation from './navigation';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false; // stop allowFontScaling
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false; // stop allowFontScaling
console.disableYellowBox = true;

const App = () => {
  return [
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <AppNavigation />
    </SafeAreaView>,
  ];
};

export default App;
