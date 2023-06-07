import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { InputContainer, TextInput } from './TextInputWithIcon.styles';
interface InputProps extends TextInputProps {
    leftIconName?: React.ReactElement | null;
    rightIconName?: React.ReactElement | null;
    onChangeText: (text: string) => void;
    placeholder?: string;
    value?: string;
    endEdditing?: () => void;
    isFocused?: boolean;
    maskValue?: string | RegExp[];
}

const TextInputIcon = React.forwardRef((props: InputProps, ref: React.Ref<RNTextInput>) => {
    const { onChangeText, leftIconName, placeholder, rightIconName, value, endEdditing, isFocused, maskValue, ...rest } = props;

    return (
        <InputContainer
            isFocused={isFocused}
            onPress={() => ref?.current && ref?.current?.focus()}>
            {leftIconName && leftIconName}
            <TextInput
                {...rest}
                ref={ref}
                placeholder={placeholder}
                onEndEditing={endEdditing}
                value={value}
                onChangeText={(masked, unmasked) => {
                    onChangeText(masked);

                }}
                mask={maskValue as any}
            />


            {rightIconName && rightIconName}
        </InputContainer>
    );
});


export default TextInputIcon;
