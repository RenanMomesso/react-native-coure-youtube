import Text from '@components/Text';
import React from 'react';
import { Pressable } from 'react-native';

interface QuizzTitleProps {
    quizzTitle: string;
    onPress: () => void;
}
const QuizzTitle = ({ quizzTitle, onPress }: QuizzTitleProps) => {
    return (
        <Pressable style={{
            backgroundColor: '#ebe3e383',
            height: 100,
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "lightgray"
        }} onPress={onPress} android_ripple={{
            color: 'lightgray'

        }}>
            <Text color='bolder'>{quizzTitle}</Text>
        </Pressable>
    )
}

export default QuizzTitle;