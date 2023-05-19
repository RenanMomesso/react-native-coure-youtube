import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { StyledText } from './Text.styles';

export enum FontFamily {
    'Poppins-SemiBold' = 'Poppins-SemiBold',
    'Poppins-Regular' = 'Poppins-Regular',
    'Poppins-Medium' = 'Poppins-Medium',
    'RobotoMono-Bold' = 'RobotoBold',
}

export type IColors = 'white' | 'black' | 'disabled';
export interface ITextProps extends RNTextProps {
    fontFamily?: FontFamily;
    size?: 'heading' | 'text' | 'button';
    color?: IColors
    align?: 'left' | 'center' | 'right';
}

const Text: React.FC<ITextProps> = ({ children, size = 'button', align = 'center', ...rest }) => {
    return <StyledText size={size} align={align} {...rest}>{children}</StyledText>;
};

export default Text;
