import { Text } from "react-native";
import { css, styled } from "styled-components/native";
import { ITextProps, colors } from ".";
import theme from "../../globalStyles/theme";

const colorModifier = {
  white: theme.colors.white || '#FFF',
  black: theme.colors.black || '#000',
  disabled: theme.colors.disabledBlack || '#CCC'
}

export const modifier = {
  heading: (color: colors) => css`
        font-size: ${({ theme }) => theme?.sizes?.fontSize?.large || 24}px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: ${({ theme }) => colorModifier[color] || theme?.colors?.black || '#FFF'};
        font-family: ${({ theme }) => theme?.sizes?.fontFamily?.PoppinsSemiBold || 'Poppins-SemiBold'};
  `,
  text: (color: colors) => css``,
  button: (color: colors) => css`
        font-size: ${({ theme }) => theme?.sizes?.fontSize?.small || 12}px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: ${({ theme }) => colorModifier[color] || theme?.colors?.white || '#FFF'};
        font-family: ${({ theme }) => theme?.sizes?.fontFamily?.PoppinsMedium || 'Poppins-Medium'};
    `,
}

export const StyledText = styled(Text) <ITextProps>`
  ${({ size, color, align }) => css`
        ${size && modifier[size](color || 'white')};
        text-align: ${align};
  `}
`;