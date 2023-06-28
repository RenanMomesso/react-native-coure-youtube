import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { StyledText } from './Text.styles';

export enum FontFamily {
    'Poppins-SemiBold' = 'Poppins-SemiBold',
    'Poppins-Regular' = 'Poppins-Regular',
    'Poppins-Medium' = 'Poppins-Medium',
    'RobotoMono-Bold' = 'RobotoBold',
    'Inter-SemiBold' = 'Inter-SemiBold',
    'Inter-Bold' = 'Inter-Bold',
}

export type IColors = 'white' | 'black' | 'disabled' | 'bolder';
export interface ITextProps extends RNTextProps {
    fontFamily?: FontFamily;
    size?: 'heading' | 'text' | 'button' | 'medium';
    color?: IColors
    align?: 'left' | 'center' | 'right';
}

const Text: React.FC<ITextProps> = ({ children, size = 'button', align = 'left', ...rest }) => {
    return <StyledText size={size} align={align} {...rest}>{children}</StyledText>;
};

export default Text;
