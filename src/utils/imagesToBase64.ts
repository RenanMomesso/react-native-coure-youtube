import RNFS from 'react-native-fs';

export const imagesToBase64 = async (path: string) => {
  const transformImage = await RNFS.readFile(path, 'base64');
  const base64Image = `data:image/jpeg;base64,${transformImage}`;
  return base64Image;
};

export const convertImagesInObject = async obj => {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the property is an object, recurse into it
      newObj[key] = await convertImagesInObject(obj[key]);
    } else if (
      typeof obj[key] === 'string' &&
      obj[key].startsWith('file:///data')
    ) {
      // If the property is a string and starts with 'file://data', convert it to base64
      newObj[key] = await imagesToBase64(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
