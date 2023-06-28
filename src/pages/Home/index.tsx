import React from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
import Button from '../../components/Button';
import { Container } from '../../globalStyles/globalComponents';
import { useDispatch } from 'react-redux'
import { clearOnboarding, clearUserAction } from '../../store/actions/userActions';
import { NavigationScreenProp, ScreenName } from '../../dtos';
import { clearStorage } from '@utils/AsyncStorageUtils';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';
import HeaderNavigation from '@components/HeaderNavigation';
import { IconHome, InviteFriendsBanner, RightIconsWrapper } from './home.styles';

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

    const { toggleBottomSheet, isOpen } = useBottomSheet()
    console.log("🚀 ~ file: index.tsx:30 ~ isOpen:", isOpen)
    const bottomSheet = () => {
        toggleBottomSheet(<Text onPress={clearStorageDevice}>clear storage</Text>)
    }

    const navigationTo = (screen: ScreenName) => {
        navigation.navigate(screen)
    }

    return (
        <Container style={{ padding: 20 }}>
            <HeaderNavigation title='Quizzo' leftIcon={<IconHome />}
                rightIcon={
                    <RightIconsWrapper>
                        <IconHome />
                        <IconHome />
                    </RightIconsWrapper>
                }
                navigation={navigation} />
            <InviteFriendsBanner />
            <Button bgColor='blue' onClick={() => navigationTo('Sudoku')} text='Sudoku' />
            <Button bgColor='blue' onClick={() => navigationTo('PaperScissorsRock')} text='PaperScissorsRock' />
            <Button bgColor='blue' onClick={() => navigationTo('CreateQuizz')} text='Create new Quizz' />
            <Button bgColor='red' onClick={bottomSheet} text='Clear storage' />
        </Container>
    )
}

export default Home;