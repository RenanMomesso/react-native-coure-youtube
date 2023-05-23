import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
import Button from '../../components/Button';
import { Container } from '../../globalStyles/globalComponents';
import { useDispatch } from 'react-redux'
import { clearOnboarding } from '../../store/actions/userActions';

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const sharedValue = useSharedValue(10)
    const animationFont = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(sharedValue.value)
        }
    }, [])
    const navigation = useNavigation()
    const clearStorageDevice = () => dispatch(clearOnboarding())

    return (
        <Container>
            <Text onPress={() => sharedValue.value = Math.random() * 10}>Testing shared Value</Text>
            <Animated.Text style={animationFont} onPress={() => navigation.navigate("Signin")}>Homasde</Animated.Text>
            <Button bgColor='red' onClick={clearStorageDevice} text='Clear storage' />
        </Container>
    )
}

export default Home;