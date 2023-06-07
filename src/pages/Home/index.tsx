import React from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
import Button from '../../components/Button';
import { Container } from '../../globalStyles/globalComponents';
import { useDispatch } from 'react-redux'
import { clearOnboarding, clearUserAction } from '../../store/actions/userActions';
import { NavigationScreenProp } from '../../dtos';
import { clearStorage } from '@utils/AsyncStorageUtils';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const sharedValue = useSharedValue(10)
    const animationFont = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(sharedValue.value)
        }
    }, [])
    const navigation = useNavigation<NavigationScreenProp>()
    const clearStorageDevice = () => {
        clearStorage()
        dispatch(clearUserAction())
    }

    const { toggleBottomSheet } = useBottomSheet()
    const bottomSheet = () => {
        toggleBottomSheet(<Text>Teste</Text>)
    }

    return (
        <Container>
            <Text onPress={() => sharedValue.value = Math.random() * 10}>Testing shared Value</Text>
            <Animated.Text style={animationFont} onPress={() => navigation.navigate('Signin')}>Homasde</Animated.Text>
            <Button bgColor='red' onClick={bottomSheet} text='Clear storage' />
        </Container>
    )
}

export default Home;