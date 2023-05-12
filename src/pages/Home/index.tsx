import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';

const Home: React.FC = () => {
    const sharedValue = useSharedValue(10)
    console.log("🚀 ~ file: index.tsx:8 ~ sharedValue:", sharedValue)
    const animationFont = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(sharedValue.value)
        }
    }, [])
    const navigation = useNavigation()
    return (
        <View>
            <Text onPress={() => sharedValue.value = Math.random() * 10}>Testing shared Value</Text>
            <Animated.Text style={animationFont} onPress={() => navigation.navigate("Signin")}>Home</Animated.Text>
        </View>
    )
}

export default Home;