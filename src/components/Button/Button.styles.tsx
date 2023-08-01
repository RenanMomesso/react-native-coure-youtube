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
        /* flex: 1; */
        width: 100%;
        align-items: center;
        justify-content: center;
        elevation: 5;
        height: 45px;
        margin-vertical: 10px;
        flex-direction: row;
        gap: 7px;
        z-index: 1;
    `}
`

export const ButtonShadow = styled.View`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.purpleMain};
    position: absolute;
    z-index: -1;
    top:0px;

`

export const ButtonShadow2 = styled.View`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.disabledBlack};
    position: absolute;
    z-index: -2;
    top:5px;

`
