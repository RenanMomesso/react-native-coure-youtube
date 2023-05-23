import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View<{ marginVertical: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: ${({ marginVertical }) => marginVertical}px;
`;

export const Line = styled.View.attrs({
  testID: 'lineWithText-line'
})`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.disabledBlack};
`;

export const TextStyled = styled(Text).attrs({
  color: 'black'
})`
  margin-horizontal: 10px;
`;