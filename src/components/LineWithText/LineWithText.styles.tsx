import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 10px;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.disabledBlack || '#CCC'};
`;

export const TextStyled = styled(Text).attrs({
    color: 'black'
})`
  margin-horizontal: 10px;
`;