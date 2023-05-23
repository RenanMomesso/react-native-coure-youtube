import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation';
import { NavigationProp } from '@react-navigation/native';
import { Container } from '../../globalStyles/globalComponents';
import { ContainerImage, ImageStyled } from './Signin.styles'
import Button from '../../components/Button';
import Anticon from 'react-native-vector-icons/AntDesign'
import HorizontalLineWithText from '../../components/LineWithText';
import Text from '../../components/Text';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/RootNavigation';
type ScreenName = keyof RootStackParamList;
interface ISignProps {
    navigation: StackNavigationProp<RootStackParamList, ScreenName> | any;
};

const Signin = ({ navigation }: ISignProps) => {

    const navigateTo = (screen: ScreenName) => {
        navigation.navigate(screen);
    }

    return (
        <Container style={{ paddingHorizontal: 20, paddingTop: 40, }}>
            <ContainerImage>
                <ImageStyled />
            </ContainerImage>
            <Text style={{ marginVertical: 10 }} size='heading' color='black'>Sign in</Text>
            <Button icon={<Anticon name="facebook-square" color={"#3B5997"} size={25} />} text='Continue with Facebook' textColor='black' bgColor='#FFF' />
            <Button icon={<Anticon name="google" size={25} />} text='Continue with Google' textColor='black' bgColor='#FFF' />
            <HorizontalLineWithText text='or' marginVertical={20} />
            <Button onClick={() => navigateTo("SigninPassword")} text='Sign in with password' textColor='white' bgColor='#000' />
            <Text color='disabled' onPress={() => navigateTo("Signup")}>
                Don't have any account?
                <Text color='black'> Sign up</Text>
            </Text>
        </Container>
    )
}

export default Signin;