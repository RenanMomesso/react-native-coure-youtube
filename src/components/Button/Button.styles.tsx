import styled, { ThemeType, css } from 'styled-components/native';
interface IButtonContainerProps {
    bgColor?: string;
    circle?: boolean;
    fullWidth?: boolean;
}

export const CircleButtonFormat = (buttonProps: IButtonContainerProps, theme: ThemeType) => css`
    background-color: ${buttonProps.bgColor || theme.colors.black};
    height: 50px;
    `;

export const ButtonContainer = styled.TouchableOpacity<IButtonContainerProps>`
    ${({ circle, theme, fullWidth, bgColor }) => css`
    background-color: ${bgColor || theme.colors.black};
        ${circle && CircleButtonFormat({ circle, bgColor }, theme)}
        border-radius: ${circle ? 50 : 10}px;
        width: ${circle ? '50px' : '100%'};
        align-items: center;
        justify-content: center;
        padding-vertical: 10px;
        elevation: 5;
        margin-vertical: 10px;
    `}
`

export const ButtonText = styled.Text<{ textColor?: string }>`
    color: ${props => props.textColor || "#FFF"};
`