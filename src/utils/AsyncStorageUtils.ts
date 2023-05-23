import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@eviraApp:Data';

export const saveDataToStorage = async (key: string, data: any) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getDataFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeDataFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const clearStorage = async () => {
  try {
    console.log('Storage successfully cleared!')
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.log(error);
    return null;
  }
};
