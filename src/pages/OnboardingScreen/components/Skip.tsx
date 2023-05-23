import React from 'react';
import { Pressable } from 'react-native';
import Text from '../../../components/Text';

interface ISkipProps {
    skipSlide: () => void;
}

const SkipSlides = ({ skipSlide }: ISkipProps) => {
    return <Pressable onPress={skipSlide} style={{ position: 'absolute', top: 60, right: 20, zIndex: 100 }}>
        <Text>Skip</Text>
    </Pressable>
}

export default SkipSlides;