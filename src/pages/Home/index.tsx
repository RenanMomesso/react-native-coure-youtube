import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Home: React.FC = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text onPress={() => navigation.navigate("Signin")}>Home</Text>
        </View>
    )
}

export default Home;