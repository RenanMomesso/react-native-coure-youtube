import Animated from "react-native-reanimated";
import { styled } from "styled-components/native";
import { Pressable } from 'react-native'

export const DropdownContainer = styled(Animated.View) <{ topPosition?: number }>`
    background-color: #fff;
    elevation: 4;
    border-radius: 8px;
    padding: 8px;
    gap: 4px;
    position: absolute;
    top: ${({ topPosition }) => topPosition ? `${topPosition}px` : 'auto'};
    z-index: 1;
    margin-horizontal:20px;
    margin-top:-20px;
    width: 100%;
    padding-bottom:20px;
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