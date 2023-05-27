import React from 'react';
import { Container, FaceBookSquareIcon, GoogleIcon } from '../../globalStyles/globalComponents';
import { ContainerBackground, ContainerImage, ImageStyled } from './Signin.styles'
import Button from '../../components/Button';
import Anticon from 'react-native-vector-icons/AntDesign'
import HorizontalLineWithText from '../../components/LineWithText';
import { View } from 'react-native'
import Text from '../../components/Text';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/dtos';
type ScreenName = keyof RootStackParamList;
interface ISignProps {
    navigation: StackNavigationProp<RootStackParamList, ScreenName> | any;
};

const Signin = ({ navigation }: ISignProps) => {

    const navigateTo = (screen: ScreenName) => {
        navigation.navigate(screen);
    }

    return (
        <ContainerBackground>
            <View style={{ paddingHorizontal: 20, paddingTop: 40, }}>
                <ContainerImage>
                    {/* <ImageStyled /> */}
                </ContainerImage>
                <Text style={{ marginVertical: 10 }} size='heading' >Sign in</Text>
                <Button icon={<FaceBookSquareIcon />} text='Continue with Facebook' textColor='black' bgColor='#FFF' />
                <Button icon={<GoogleIcon />} text='Continue with Google' textColor='black' bgColor='#FFF' />
                <HorizontalLineWithText textColor='white' text='or' marginVertical={20} lineColor='#FFF' />
                <Button onClick={() => navigateTo("SigninPassword")} text='Sign in with password' textColor='white' bgColor='#000' />
                <Text onPress={() => navigateTo("Signup")}>
                    Don't have any account?
                    <Text color='black'> Sign up</Text>
                </Text>
            </View>
        </ContainerBackground>
    )
}

export default Signin;