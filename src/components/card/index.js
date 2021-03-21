import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const Card = props => {
  const style = props.type ? styles[props.type] : {};

  return (
    <TouchableOpacity
      key={props.keys}
      activeOpacity={props.activeOpacity ? props.activeOpacity : 0.8}
      onPress={props.onPress}
      disabled={!props.onPress || props.loading}
      style={[styles.container, style, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    shadowOffset: {width: 0.5, height: 0.5},
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  list: {
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  EMPTY: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    borderRadius: 0,
  },
});
