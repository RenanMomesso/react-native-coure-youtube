import { Dimensions } from 'react-native';

const { scale, width } = Dimensions.get('window');
export default {
  colors: {
    black: '#101010',
    lightBlack: '#151617',
    textBlackColor: '#242424',
    disabledBlack: '#c4c3c3',
  },
  sizes: {
    fontSize: width * 0.8,
  },
};
