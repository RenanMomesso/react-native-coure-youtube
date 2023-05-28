import { Text } from "react-native";
import { css, styled } from "styled-components/native";
import { ITextProps, IColors } from ".";
import theme from "../../globalStyles/theme";

const colorModifier = {
  white: theme.colors.white || '#FFF',
  black: theme.colors.black || '#000',
  disabled: theme.colors.disabledBlack || '#CCC',
  bolder: theme.colors.normalBlack || '#333',
}

export const modifier = {
  heading: (color: IColors) => css`
        font-size: ${({ theme }) => theme?.sizes?.fontSize?.large || 24}px;
        letter-spacing: 0.1px;
        color: ${({ theme }) => colorModifier[color]};
        font-family: ${({ theme }) => theme?.sizes?.fontFamily?.PoppinsSemiBold || 'Poppins-SemiBold'};
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  text: (color: IColors) => css`
      color: ${({ theme }) => colorModifier[color]};
      font-family: ${({ theme }) => theme?.sizes?.fontFamily?.InterMedium || 'Poppins-SemiBold'};
      /* font-size: ${({ theme }) => theme?.sizes?.fontSize?.medium || 16}px; */
  `,
  button: (color: IColors) => css`
        font-size: ${({ theme }) => theme.sizes.fontSize.small || 12}px;
        color: ${({ theme }) => colorModifier[color]};
        font-family: ${({ theme }) => theme?.sizes?.fontFamily.InterBold};
        letter-spacing: 0.5px;
        `,
  medium: (color: IColors) => css`
        font-family: ${({ theme }) => theme?.sizes?.fontFamily.InterSemiBold};
        font-size: ${({ theme }) => theme.sizes.fontSize.medium || 16}px;
   `
}

export const StyledText = styled(Text) <ITextProps>`
  ${({ size, color, align }) => css`
        ${size && modifier[size || 'button'](color || 'white')};
        text-align: ${align};
  `}
`;