import React from 'react';
import { ButtonContainer, ButtonShadow, ButtonShadow2 } from './Button.styles'
import { TouchableOpacityProps, } from 'react-native';
import Text, { IColors } from '../Text';

interface IButtonProps extends TouchableOpacityProps {
    onClick?: () => void;
    text?: string;
    icon?: React.ReactElement;
    bgColor?: string;
    textColor?: IColors;
    circle?: boolean;
}

const Button: React.FC<IButtonProps> = ({ onClick, text = null, icon = null, bgColor, textColor, circle, ...rest }) => {
    return (
        <ButtonContainer {...rest} testID='button-component' onPress={onClick} bgColor={bgColor} circle={circle} >
            <ButtonShadow />
            <ButtonShadow2 />
            {icon && icon}
            {text && !circle && <Text size='button' color={textColor || 'white'}>{text}</Text>}
        </ButtonContainer>
    )
}

export default Button;