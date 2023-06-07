import { Alert } from 'react-native';

export const errorAlert = (error: Error) => {
  Alert.alert('Error', error?.message || 'Something went wrong');
};
