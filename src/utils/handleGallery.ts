import {
  CameraOptions,
  ImageLibraryOptions,
  Callback,
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';

export const handleGallery = (): Promise<Asset> => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 0.5,
    maxWidth: 500,
    maxHeight: 500,
  };

  return new Promise((resolve, reject) => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        reject('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        reject(response.errorMessage);
      } else {
        if (response.assets) {
          const selectedImage = response?.assets[0];
          resolve(selectedImage);
        }
      }
    });
  });
};
