import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { ArrowDownIcon, InputContainer, TextInput } from './TextInputWithIcon.styles';
import Text from '../Text';
import DropdownSelect from '@components/DropdownSelect/Dropdown';
import { useKeyboard } from '@hooks/useKeyBoard';
interface InputProps extends TextInputProps {
    leftIconName?: React.ReactElement | null;
    rightIconName?: React.ReactElement | null;
    onChangeText: (text: string) => void;
    placeholder?: string;
    value?: string;
    endEdditing?: () => void;
    isFocused?: boolean;
    maskValue?: string | RegExp[];
    topTitle?: string;
    dropDownList?: {
        id: string;
        name: string;
    }[];
}

const TextInputIcon = React.forwardRef((props: InputProps, ref: React.Ref<RNTextInput>) => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const { onChangeText, leftIconName, placeholder, rightIconName, value, endEdditing, isFocused, maskValue, topTitle = null, dropDownList, ...rest } = props;
    const { dissmisKeyboard } = useKeyboard()


    const handleDropdown = () => {
        setDropdownOpen(previousState => !previousState);
        dissmisKeyboard();
    };

    const handleAdd = (text: string) => {
        onChangeText(text);
        setDropdownOpen(false);
    }

    const isDropdown = !!dropDownList && dropDownList.length > 0;

    return (
        <>
            {topTitle && <Text style={{ marginTop: 10 }}>{topTitle}</Text>}
            <InputContainer
                topTitle={!!topTitle}
                isFocused={isFocused}
                onPress={isDropdown ? () => handleDropdown() : () => ref?.current && ref?.current?.focus()}>
                {leftIconName && leftIconName}
                <TextInput
                    editable={!!dropDownList && dropDownList.length > 0 ? false : true}
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
                {!!dropDownList && dropDownList.length > 0 && <ArrowDownIcon onPress={handleDropdown} />}
            </InputContainer >
            {dropdownOpen && !!dropDownList?.length && <DropdownSelect
                closeDropdown={() => setDropdownOpen(false)}
                dropdownList={dropDownList}
                add={handleAdd}
            />
            }
        </>
    );
});


export default TextInputIcon;
