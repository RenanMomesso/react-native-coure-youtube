import { TextProps as RNTextProps, Text } from "react-native";
import { css, styled } from "styled-components/native";
import { ITextProps, colors } from ".";
import theme from "../../globalStyles/theme";

const colorModifier = {
  white: theme.colors.white || '#FFF',
  black: theme.colors.black || '#000',
  disabled: theme.colors.disabledBlack || '#CCC'
}

export const modifier = {
  heading: (color: colors) => css``,
  text: (color: colors) => css``,
  button: (color: colors) => css`
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: ${({ theme }) => colorModifier[color] || theme?.colors?.white || '#FFF'};
        font-family: ${({ theme }) => theme?.sizes?.fontFamily?.PoppinsMedium || 'Poppins-Medium'};
    `,
}

export const StyledText = styled(Text) <ITextProps>`
  ${({ size, color }) => css`
        ${size && modifier[size](color || 'white')};
`}
`;