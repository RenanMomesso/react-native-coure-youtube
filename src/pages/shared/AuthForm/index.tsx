import TextInputIcon from '@components/TextInputWithIcon';
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { EmailIcon, IconEye, PasswordIcon } from './AuthForm.styles';

interface AuthFormProps {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    password: string;
    emailRef: React.RefObject<TextInput>;
    passwordRef: React.RefObject<TextInput>;
}
const AuthForm: React.FC<AuthFormProps> = (props) => {
    const { setEmail, setPassword, email, password, emailRef, passwordRef } = props;

    const [emailFocused, setEmailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)
    const [showSecuryTextEntry, setShowSecuryTextEntry] = useState(false)

    return (
        <>
            <TextInputIcon
                isFocused={emailFocused}
                keyboardType='email-address'
                ref={emailRef}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                leftIconName={<EmailIcon isFocused={emailFocused || !!email.length} />}
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
                leftIconName={<PasswordIcon isFocused={passwordFocused || !!password.length} />}
                ref={passwordRef}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry={!showSecuryTextEntry}
                rightIconName={<IconEye isFocused={passwordFocused || !!password.length} onPress={() => setShowSecuryTextEntry(!showSecuryTextEntry)} showPassword={showSecuryTextEntry} />}
            />
        </>
    )
}

export default AuthForm;