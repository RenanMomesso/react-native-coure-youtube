import React, { useState, useRef } from 'react';
import { Alert, TextInput } from 'react-native'
import HeaderNavigation from '../../components/HeaderNavigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Text from '../../components/Text';
import TextInputIcon from '../../components/TextInputWithIcon';
import { EmailIcon, IconEye, PasswordIcon } from '../../components/TextInputWithIcon/TextInputWithIcon.styles';
import { Pressable } from 'react-native'
import RememberMeCheckBox from '@components/CheckBoxAndText/RememberMeCheckBox';
import Button from '@components/Button';
import HorizontalLineWithText from '../../components/LineWithText';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../store/actions/userActions';
import { RootStackParamList } from 'src/dtos';
import { login, signUp } from 'src/services/auth-service';
import LoginWithSocials from '@components/LoginWithSocials';
import AuthForm from '@pages/shared/AuthForm';

type ScreenName = keyof RootStackParamList;
export type NavigationScreenProp = StackNavigationProp<RootStackParamList, ScreenName>

const SigninWithPassword = () => {
    const dispatch = useDispatch();
    const navigation: NavigationScreenProp = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleLoseFocus = () => {
        emailRef?.current?.blur();
        passwordRef?.current?.blur();
    }

    const handleSignin = async () => {

        try {
            const result = await login(email, password)
            if (result?.token) {
                dispatch(setUserAction(result))
            }
        } catch (error) {
            Alert.alert("Error", (error as any)?.networkError?.result?.errors[0].message || (error as Error).message || "Something went wrong")
        }
    };

    const disabledButton = !email.length || !password.length;

    return (
        <Pressable onPress={handleLoseFocus} style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#FFF", flex: 1 }}>
            <HeaderNavigation navigation={navigation} />
            <Text style={{ marginVertical: 40 }} size='heading' align='left' color='black' numberOfLines={2}>Login to your {'\n'}account</Text>
            <AuthForm passwordRef={passwordRef} emailRef={emailRef} password={password} email={email} setEmail={setEmail} setPassword={setPassword} />
            <RememberMeCheckBox value={rememberMe} setValue={setRememberMe} text='Remember me' />
            <Button style={{ opacity: disabledButton ? 0.5 : 1, marginBottom: 20 }} disabled={disabledButton} text='Sign in' onClick={handleSignin} />
            <Text color='bolder'>Forgot the password?</Text>
            <HorizontalLineWithText style={{ marginTop: 40, marginBottom: 10 }} text='or continue with' />
            <LoginWithSocials />
            <Text color='disabled' onPress={() => navigation.navigate('Signup')}>
                Don't have any account?
                <Text color='bolder' style={{ textDecorationLine: 'underline' }}> Sign up</Text>
            </Text>
        </Pressable>
    )
}

export default SigninWithPassword;