import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { KeyboardAvoidingView, TextInput as RNTextInput } from 'react-native';
import { Platform } from 'react-native';
import theme from '../../globalStyles/theme';

// Define the props our component will receive
interface InputProps {
    leftIconName?: React.ReactElement | null;
    rightIconName?: React.ReactElement | null;
    onChangeText: (text: string) => void;
    placeholder?: string;
    value?: string;
}

const InputContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: black;
  padding: 0px 18px;
  background-color: transparent;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  elevation:2;
  gap: 8px;
`;

const TextInput = styled.TextInput.attrs({
    selectionColor: theme.colors.black,
})`
  flex: 1;
  font-family: ${({ theme }) => theme.sizes.fontFamily.PoppinsSemiBold};
`;

const TextInputIcon: React.FC<InputProps> = ({ leftIconName, rightIconName, onChangeText, placeholder, value }) => {
    console.log({ value })
    const inputRef = useRef<RNTextInput | null>(null);
    return (
        <KeyboardAvoidingView
            behavior={'position'}
            keyboardVerticalOffset={30}>
            <InputContainer onPress={() => inputRef.current?.focus()}>
                {leftIconName && leftIconName}
                <TextInput value={value} ref={inputRef} onChangeText={onChangeText} placeholder={placeholder} />
                {rightIconName && rightIconName}
            </InputContainer>
        </KeyboardAvoidingView>
    );
}

export default TextInputIcon;
