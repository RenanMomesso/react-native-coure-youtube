import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useAndroidBackHandler = (onBackPress: () => boolean) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        // Clean up the event listener on component unmount
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [onBackPress]);
};

export default useAndroidBackHandler;
