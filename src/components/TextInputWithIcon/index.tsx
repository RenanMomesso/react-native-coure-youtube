import React from 'react';
import { KeyboardAvoidingView, TextInput as RNTextInput, TextInputProps } from 'react-native';
import { InputContainer, TextInput } from './TextInputWithIcon.styles';
import MaskInput from 'react-native-mask-input';

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
            {maskValue ?
                <MaskInput
                    style={{ flex: 1 }}
                    {...rest}
                    ref={ref}
                    placeholder='Date of Birth'
                    onEndEditing={endEdditing}
                    value={value}
                    onChangeText={(masked, unmasked) => {
                        onChangeText(masked);

                    }}
                    mask={maskValue as any}
                />
                :
                <TextInput
                    onEndEditing={endEdditing}
                    {...rest}
                    value={value}
                    ref={ref}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            }
            {rightIconName && rightIconName}
        </InputContainer>
    );
});


export default TextInputIcon;
