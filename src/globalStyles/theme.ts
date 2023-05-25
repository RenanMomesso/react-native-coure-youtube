import { Dimensions } from 'react-native';

const { scale, width } = Dimensions.get('window');
export default {
  colors: {
    normalBlack: '#000',
    black: '#242424',
    lightBlack: '#151617',
    textBlackColor: '#242424',
    disabledBlack: '#cccc',
    white: '#FFF',
    lightWhite: '#f7f7F2',
    lightGray: '#f9f9f9',
  },
  sizes: {
    fontSize: {
      small: Math.floor(width * 0.03),
      medium: Math.floor(width * 0.045),
      large: Math.floor(width * 0.085),
    },
    fontFamily: {
      RobotoBold: 'RobotoMono-Bold',
      RobotoRegular: 'RobotoMono-Regular',
      RobotoMedium: 'RobotoMono-Medium',
      RoboSemiBold: 'RobotoMono-SemiBold',
      PoppinsRegular: 'Poppins-Regular',
      PoppinsSemiBold: 'Poppins-SemiBold',
      PoppinsMedium: 'Poppins-Medium',
    },
  },
};
