import React, {useEffect, useState} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import ImageView from '../../components/Image';
import TextBox from '../../components/TextBox';
import {categories} from '../../data/dataArrays';
import styles from './styles';
import {connect} from 'react-redux';
import {makeFavrouite} from '../../redux/services';

const Home = props => {
  const [cousineData, setData] = useState([]);
  const {navigation, route} = props;
  const {navigate} = navigation;

  useEffect(() => {}, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onMoveTo('Dishes', {item})}
        style={[styles.headerButtonContainer, {backgroundColor: item.colors}]}>
        <ImageView style={styles.headerButtonImage} uri={item.photo_url} />
        <TextBox style={{color: 'white', paddingTop: 10}}>{item.name}</TextBox>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <FlatList numColumns={2} data={categories} renderItem={renderItem} />
    </View>
  );
};

const mapStateToProps = ({BookData}) => {
  console.log('mapStateToProps', BookData);

  return {};
};

export default connect(mapStateToProps, {makeFavrouite})(Home);
