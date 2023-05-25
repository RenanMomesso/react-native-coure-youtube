import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native'
import HeaderNavigation from '../../components/HeaderNavigation';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import Text from '../../components/Text';
import TextInputIcon from '../../components/TextInputWithIcon';
import { EmailIcon, PasswordIcon } from '../../components/TextInputWithIcon/TextInputWithIcon.styles';
import { Pressable } from 'react-native'
import RememberMeCheckBox from './components/RememberMeCheckBox';
import Button from '../../components/Button';
import HorizontalLineWithText from '../../components/LineWithText';

type ScreenName = keyof RootStackParamList;
export type NavigationScreenProp = StackNavigationProp<RootStackParamList, ScreenName>

const SignupScreen = () => {
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

    return (
        <Pressable onPress={handleLoseFocus} style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#FFF", flex: 1 }}>
            <HeaderNavigation navigation={navigation} />
            <Text style={{ marginVertical: 40 }} size='heading' align='left' color='black' numberOfLines={2}>Create your {'\n'}account</Text>
            <TextInputIcon
                isFocused={emailRef.current?.isFocused()}
                ref={emailRef}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                leftIconName={<EmailIcon />}
                endEdditing={() => passwordRef.current?.focus()}
            />
            <TextInputIcon
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                leftIconName={<PasswordIcon />}
                ref={passwordRef}
            />
            <RememberMeCheckBox value={rememberMe} setValue={setRememberMe} />
            <Button text='Sign up' />
            <HorizontalLineWithText style={{ marginTop: 40 }} text='or continue with' />
        </Pressable>
    )
}

export default SignupScreen;