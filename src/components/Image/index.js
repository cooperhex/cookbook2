import React, {useState, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import { deviceDimensions } from '../../constants';

const ImgWidth = deviceDimensions.width;

const ImageView = props => {
  const [uri, setImage] = useState(
    'http://172.105.35.91/ekiranaghar/public/product-default.gif',
  );

  useEffect(() => {
    if (props.uri) {
      setImage(props.uri);
    } else {
      setImage('http://172.105.35.91/ekiranaghar/public/product-default.gif');
    }
  }, [props.uri]);

  const priority = props.priority
    ? FastImage.priority[props.priority] // [high, low, normal]
    : FastImage.priority.high;

  return (
    <FastImage
      source={{
        uri,
        priority: priority,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={
        props.resizeMode
          ? FastImage.resizeMode[props.resizeMode]
          : FastImage.resizeMode.contain
      }
      onError={e => {
        setImage('http://172.105.35.91/ekiranaghar/public/product-default.gif');
      }}
      style={[styles.itemImage3, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  itemImage3: {
    width: ImgWidth / 2 - 30,
    height: ImgWidth / 2 - 50,
  },
});

export default ImageView;
