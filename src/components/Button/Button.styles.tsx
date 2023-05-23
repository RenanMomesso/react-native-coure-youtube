import styled, { ThemeType, css } from 'styled-components/native';
interface IButtonContainerProps {
    bgColor?: string;
    circle?: boolean;
}

export const CircleButtonFormat = (buttonProps: IButtonContainerProps, theme: ThemeType) => css`
    background-color: ${buttonProps.bgColor || theme.colors.black};
    height: 50px;
    `;

export const ButtonContainer = styled.TouchableOpacity<IButtonContainerProps>`
    ${({ circle, theme, bgColor }) => css`
    background-color: ${bgColor || theme.colors.black};
        ${circle && CircleButtonFormat({ circle, bgColor }, theme)}
        border-radius: ${circle ? 50 : 20}px;
        width: ${circle ? '50px' : '100%'};
        align-items: center;
        justify-content: center;
        elevation: 5;
        height: 45px;
        margin-vertical: 10px;
        flex-direction: row;
        gap: 7px;
    `}
`
