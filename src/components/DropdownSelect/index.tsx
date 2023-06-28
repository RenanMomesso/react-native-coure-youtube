import Text from '@components/Text';
import React from 'react';
import { Pressable } from 'react-native';

interface DropDownButtonSelectProps {
    text: string;
    onPress: () => void;
}

const DropDownButtonSelect: React.FC<DropDownButtonSelectProps> = ({ text, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Text color='black'>{text}</Text>
        </Pressable>
    )
}

export default DropDownButtonSelect;