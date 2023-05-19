import React from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Container } from '../../globalStyles/globalComponents';

interface IPaginatorProps {
    data: any;
    currentIndex: number;
}

const Paginator = ({ data, currentIndex }: IPaginatorProps) => {
    const width = data.map((_: any, index: number) => {
        return useAnimatedStyle(() => {
            return {
                width: withTiming(currentIndex === index ? 25 : 10),
            };
        });
    });


    return (
        <Container style={{ flexDirection: 'row', alignSelf: 'center', gap: 6, marginTop: -60, marginBottom: 40 }}>
            {data.map((_: any, index: number) => {
                return <Animated.View key={index} style={[{ width: 10, height: 10, borderRadius: 50, backgroundColor: index === currentIndex ? 'black' : 'darkgray' }, width[index]]} />
            })}
        </Container >
    )
}

export default Paginator;