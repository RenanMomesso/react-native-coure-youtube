import React from 'react';
import { KeyboardAvoidingView, TextInput as RNTextInput, TextInputProps } from 'react-native';
import { InputContainer, TextInput } from './TextInputWithIcon.styles';

interface InputProps extends TextInputProps {
    leftIconName?: React.ReactElement | null;
    rightIconName?: React.ReactElement | null;
    onChangeText: (text: string) => void;
    placeholder?: string;
    value?: string;
    endEdditing?: () => void;
    isFocused?: boolean;
}

const TextInputIcon = React.forwardRef((props: InputProps, ref: React.Ref<RNTextInput>) => {
    const { onChangeText, leftIconName, placeholder, rightIconName, value, endEdditing, isFocused, ...rest } = props;

    return (
        <KeyboardAvoidingView
            behavior={'position'}
            keyboardVerticalOffset={30}>
            <InputContainer
                isFocused={isFocused}
                onPress={() => ref?.current && ref?.current?.focus()}>
                {leftIconName && leftIconName}
                <TextInput
                    onEndEditing={endEdditing}
                    {...rest}
                    value={value}
                    ref={ref}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
                {rightIconName && rightIconName}
            </InputContainer>
        </KeyboardAvoidingView>
    );
});


export default TextInputIcon;
