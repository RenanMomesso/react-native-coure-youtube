import React from 'react';
import { View, Text } from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import { useNavigation } from '@react-navigation/native';

const Signin: React.FC = () => {
    const navigation = useNavigation()
    return (
        <View>
            <HeaderNavigation
                title='Home'
                navigation={navigation}
            />
        </View>
    )
}

export default Signin;