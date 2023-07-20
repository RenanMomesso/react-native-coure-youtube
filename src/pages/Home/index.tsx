import React from 'react';
import { Alert, Text, Image, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
import Button from '../../components/Button';
import { Container, Row } from '../../globalStyles/globalComponents';
import { useDispatch } from 'react-redux'
import { clearOnboarding, clearUserAction } from '../../store/actions/userActions';
import { NavigationScreenProp, ScreenName } from '../../dtos';
import { clearStorage } from '@utils/AsyncStorageUtils';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';
import HeaderNavigation from '@components/HeaderNavigation';
import { IconHome, InviteFriendsBanner, RightIconsWrapper } from './home.styles';
import { createQuizz } from 'src/store/reducers/quizzReducer';
import { gameId } from '@utils/index';

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
        if (screen === 'CreateQuizz') {
            dispatch(createQuizz({
                quizzId: `quiz-${gameId()}`
            }))
        }
        navigation.navigate(screen)
    }

    return (
        <Container style={{ padding: 20 }}>
            <HeaderNavigation title='Quizzo' leftIcon={<IconHome name="icon" />}
                rightIcon={
                    <RightIconsWrapper>
                        <IconHome name="icon" />
                    </RightIconsWrapper>
                }
            />
            <InviteFriendsBanner>
                <Image style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                }} source={{ uri: 'https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/9ce560d4-2d25-4989-8949-8ef755da6ab7/Isometric_Scifi_Buildings_create_a_banner_with_some_circles_an_2.jpg' }} />
            </InviteFriendsBanner>
            <Row style={{ justifyContent: 'space-between' }}>
                <Text>Discover</Text>
                <Text onPress={() => navigation.navigate("DiscoverScreen")}>View all {`->`}</Text>
            </Row>
        </Container>
    )
}

export default Home;