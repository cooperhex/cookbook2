import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import ImageView from '../../components/Image';
import TextBox from '../../components/TextBox';
import {recipes} from '../../data/dataArrays';
import styles from './styles';
import {HeartIcon} from '../../components/svgs';

const Dishes = props => {
  const {navigation, route} = props;
  const {navigate} = navigation;

  const {params = {}} = route;

  useEffect(() => {
    console.log('[DISAHES] useEffect', [params]);
    navigation.setOptions({title: params.item.name});
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.7}
        onPress={() => {}}
        style={[styles.dishesStyle]}>
        <ImageView style={styles.dishesImages} uri={item.photo_url} />
        <View style={{flex: 1, padding: 10}}>
          <HeartIcon style={{alignSelf: 'flex-end',}} full={false} />
          <TextBox numberOfLines={5} style={{fontSize: 16}}>
            {item.title}
          </TextBox>
          <TextBox numberOfLines={5} style={{fontSize: 12}}>
            {item.description}
          </TextBox>
        </View>
      </TouchableOpacity>
    );
  };

  const onMoveTo = (screen, params = {}) => {
    navigate(screen, params);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <FlatList data={recipes} renderItem={renderItem} />
    </View>
  );
};

export default Dishes;
