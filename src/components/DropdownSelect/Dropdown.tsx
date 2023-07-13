import React, { useEffect } from 'react';
import DropDownButtonSelect from '.';
import { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated'
import { DropdownContainer, DropdownOverlay } from './DropdownSelect.styled'

interface DropdownSelectProps {
    dropdownList: any[];
    closeDropdown: () => void;
    add: (value: any) => void;
    topPosition?: number;
}

const DropdownSelect = ({ dropdownList, closeDropdown, add, topPosition }: DropdownSelectProps): any => {
    const animationValue = useSharedValue(0);

    useEffect(() => {
        animationValue.value = withTiming(1, { duration: 500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: animationValue.value,
        };
    });

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
            <DropdownContainer style={animatedStyle} topPosition={topPosition}>
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
