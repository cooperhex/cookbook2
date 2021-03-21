import React from 'react';
import {Text} from 'react-native';

const TextBox = props => {
  const onPress = props.onPress ? props.onPress : () => {};

  return (
    <Text {...props} onPress={onPress} style={props.style}>
      {props.children}
    </Text>
  );
};
export default TextBox;
