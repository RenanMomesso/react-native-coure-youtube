import React, { useEffect } from 'react';
import DropDownButtonSelect from '.';
import styled from 'styled-components/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated'
import { Pressable } from 'react-native'

const DropdownContainer = styled(Animated.View)`
    background-color: #fff;
    elevation: 4;
    border-radius: 8px;
    padding: 8px;
    gap: 4px;
`

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const DropdownOverlay = styled(AnimatedPressable)`
    flex: 1;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

interface DropdownSelectProps {
    dropdownList: any[];
    closeDropdown: () => void;
    add: (value: any) => void;
}

const DropdownSelect = ({ dropdownList, closeDropdown, add }: DropdownSelectProps): any => {
    const animationValue = useSharedValue(0);

    useEffect(() => {
        animationValue.value = withTiming(1, { duration: 500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: animationValue.value,
        };
    });

    //how to run on runOnJs

    const onPressOverlay = () => {
        animationValue.value = withTiming(0, { duration: 200 }, () => {
            runOnJS(closeDropdown)();
            animationValue.value = withTiming(1, { duration: 200 });
        });
    }

    if (!dropdownList || dropdownList.length === 0) return null;
    return (
        <>
            <DropdownOverlay onPress={onPressOverlay} style={animatedStyle} />
            <DropdownContainer style={animatedStyle}>
                {dropdownList.map((item: any, index: number) => {
                    return (
                        <DropDownButtonSelect key={index} text={item.name} onPress={() => add(item)} />
                    )
                })}
            </DropdownContainer>
        </>
    )
}

export default DropdownSelect;
