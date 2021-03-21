import {StyleSheet} from 'react-native';
import {deviceDimensions} from '../../constants';

const styles = StyleSheet.create({
  headerButtonContainer: {
    padding: 10,
    margin: 6,
    borderRadius: 20,
    width: deviceDimensions.width / 2.3,
    height: deviceDimensions.width / 2.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonImage: {
    justifyContent: 'center',
    width: deviceDimensions.width / 3.5,
    height: deviceDimensions.width / 4,
  },
  dishesStyle: {
    // padding: 10,
    marginVertical: 4,
    flex: 1,
    marginRight: 6,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#E1E1E1',
    flexDirection: 'row',
    borderWidth: 0.5,
    width: deviceDimensions.width - 20,
    height: deviceDimensions.width / 2 - 20,
    justifyContent: 'center',
    elevation: 0.7,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0.5, height: 0.5},
  },
  dishesImages: {
    alignSelf: 'center',
    width: deviceDimensions.width / 2.5,
    height: deviceDimensions.width / 2.8,
  },
});

export default styles;
