import React from 'react';
import { ButtonContainer, ButtonText } from './Button.styles'
import { TouchableOpacityProps } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
    onClick?: () => void;
    text?: string;
    icon?: React.ReactElement;
    bgColor?: string;
    textColor?: string;
    circle?: boolean;
    fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({ onClick, text = null, icon = null, bgColor, textColor, circle, fullWidth = true, ...rest }) => {
    return (
        <ButtonContainer {...rest} testID='button-component' onPress={onClick} bgColor={bgColor} circle={circle} fullWidth={fullWidth}>
            {icon && icon}
            {text && <ButtonText textColor={textColor}>{text}</ButtonText>}
        </ButtonContainer>
    )
}

export default Button;