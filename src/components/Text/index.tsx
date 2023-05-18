import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { StyledText } from './Text.styles';

export enum FontFamily {
    'Poppins-SemiBold' = 'Poppins-SemiBold',
    'Poppins-Regular' = 'Poppins-Regular',
    'Poppins-Medium' = 'Poppins-Medium',
    'RobotoMono-Bold' = 'RobotoBold',
}

export type colors = 'white' | 'black' | 'disabled';
export interface ITextProps extends RNTextProps {
    fontFamily?: FontFamily;
    size?: 'heading' | 'text' | 'button';
    color?: colors
}

const Text: React.FC<ITextProps> = ({ children, size = 'button', ...rest }) => {
    return <StyledText size={size} {...rest}>{children}</StyledText>;
};

export default Text;
