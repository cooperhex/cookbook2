import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';

export const STORAGES = {
  USER: 'cookbook.user',
  SEARCH: 'cookbook.searchProduct',
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const deviceDimensions = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};

