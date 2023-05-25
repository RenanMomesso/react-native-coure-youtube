import React, { useState, useRef } from 'react';
import { Alert, TextInput } from 'react-native'
import HeaderNavigation from '../../components/HeaderNavigation';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import Text from '../../components/Text';
import TextInputIcon from '../../components/TextInputWithIcon';
import { EmailIcon, IconEye, PasswordIcon } from '../../components/TextInputWithIcon/TextInputWithIcon.styles';
import { Pressable } from 'react-native'
import RememberMeCheckBox from './components/RememberMeCheckBox';
import Button from '@components/Button';
import HorizontalLineWithText from '../../components/LineWithText';
import Row from '../../globalStyles/globalComponents/Row';
import { FaceBookSquareIcon, GoogleIcon } from '../../globalStyles/globalComponents';
import { useMutation } from '@apollo/client';
import { SignupMutation } from '../../graphql/mutations';

type ScreenName = keyof RootStackParamList;
export type NavigationScreenProp = StackNavigationProp<RootStackParamList, ScreenName>

const SignupScreen = () => {
    const navigation: NavigationScreenProp = useNavigation();
    const [handleSignupMutation, { loading }] = useMutation<{
        variables: {
            email: string,
            password: string
        }
    }>(SignupMutation)
    const [email, setEmail] = useState("")
    const [emailFocused, setEmailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [showSecuryTextEntry, setShowSecuryTextEntry] = useState(false)

    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleLoseFocus = () => {
        emailRef?.current?.blur();
        passwordRef?.current?.blur();
    }

    const handleSignUp = async () => {
        try {
            const { data, errors } = await handleSignupMutation({
                variables: {
                    data: {
                        email: 2323,
                        password
                    }
                }
            })
            console.log(data, errors, loading)
            if (errors) {
                Alert.alert("Error", 'errou')
            } else {
                Alert.alert("Success", "Sign up successfully")
            }
        } catch (error) {

            Alert.alert("Error", (error as any)?.networkError?.result?.errors[0].message)
        }
    };

    return (
        <Pressable onPress={handleLoseFocus} style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#FFF", flex: 1 }}>
            <HeaderNavigation navigation={navigation} />
            <Text style={{ marginVertical: 40 }} size='heading' align='left' color='black' numberOfLines={2}>Create your {'\n'}account</Text>
            <TextInputIcon
                isFocused={emailFocused}
                keyboardType='email-address'
                ref={emailRef}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                leftIconName={<EmailIcon />}
                returnKeyType='next'
                endEdditing={() => passwordRef.current?.focus()}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                placeholderTextColor={"lightgray"}
            />
            <TextInputIcon
                placeholderTextColor={"lightgray"}
                isFocused={passwordFocused}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                leftIconName={<PasswordIcon />}
                ref={passwordRef}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry={!showSecuryTextEntry}
                rightIconName={<IconEye onPress={() => setShowSecuryTextEntry(!showSecuryTextEntry)} showPassword={showSecuryTextEntry} />}
            />
            <RememberMeCheckBox value={rememberMe} setValue={setRememberMe} />
            <Button text='Sign up' onClick={handleSignUp} />
            <HorizontalLineWithText style={{ marginTop: 40, marginBottom: 10 }} text='or continue with' />
            <Row style={{ marginBottom: 10 }}>
                <Button bgColor={"#FFF"} style={{ flex: 1 }} icon={<FaceBookSquareIcon />} />
                <Button bgColor={"#FFF"} style={{ flex: 1 }} icon={<GoogleIcon />} />
            </Row>
            <Text color='disabled' onPress={() => navigation.navigate('SigninPassword')}>
                Already have any account?
                <Text color='black'> Sign in</Text>
            </Text>
        </Pressable>
    )
}

export default SignupScreen;