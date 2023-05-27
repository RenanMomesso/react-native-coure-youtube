import styled from 'styled-components/native';
import Text, { IColors } from '../Text';

export const Container = styled.View<{ marginVertical: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: ${({ marginVertical }) => marginVertical}px;
`;

export const Line = styled.View.attrs({
  testID: 'lineWithText-line'
}) <{ lineColor?: string }>`
  flex: 1;
  height: 2px;
  background-color: ${({ theme, lineColor }) => lineColor || theme.colors.disabledBlack};
`;

export const TextStyled = styled(Text).attrs((props: { selectedColor: IColors }) => ({
  color: props.selectedColor || 'black',
  ...props
}))`
  margin-horizontal: 10px;
`;