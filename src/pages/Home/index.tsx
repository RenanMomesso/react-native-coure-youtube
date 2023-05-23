import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
import Button from '../../components/Button';
import { clearStorage } from '../../utils/AsyncStorageUtils';
import { Container } from '../../globalStyles/globalComponents';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC = () => {
    const sharedValue = useSharedValue(10)
    const animationFont = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(sharedValue.value)
        }
    }, [])
    const navigation = useNavigation()
    const clearStorageDevice = async () => {
        await AsyncStorage.clear()
        Alert.alert("Storage cleared")
    }
    return (
        <Container>
            <Text onPress={() => sharedValue.value = Math.random() * 10}>Testing shared Value</Text>
            <Animated.Text style={animationFont} onPress={() => navigation.navigate("Signin")}>Homasde</Animated.Text>
            <Button bgColor='red' onClick={clearStorageDevice} text='Clear storage' />
        </Container>
    )
}

export default Home;