import { Dimensions } from 'react-native';

const { scale, width } = Dimensions.get('window');
export default {
  colors: {
    black: '#101010',
    lightBlack: '#151617',
    textBlackColor: '#242424',
    disabledBlack: '#c4c3c3',
    white: '#ffffff',
    lightWhite: '#f7f7f7',
  },
  sizes: {
    fontSize: {
      small: width * 0.036,
      medium: width * 0.45,
      large: width * 0.055,
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
