
import styled from 'styled-components/native';
import theme from '../../globalStyles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const InputContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
  border-width: ${({ isFocused }) => isFocused ? 2 : 0}px;
  padding: 0px 18px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  /* elevation:2; */
  gap: 8px;
  margin-vertical: 10px;
  `;

export const TextInput = styled.TextInput.attrs({
    selectionColor: theme.colors.black,
})`
  /* background-color: ${({ theme }) => theme.colors.disabledBlack}; */
  flex:1;
  font-family: ${({ theme }) => theme.sizes.fontFamily.PoppinsSemiBold};
  font-size: ${({ theme }) => theme.sizes.fontSize.small}px;
  top: 1px;

`;

export const EmailIcon = styled(Icon).attrs({
    name: 'email',
    size: 20,
    color: theme.colors.black,
})``

export const PasswordIcon = styled(Icon).attrs({
    name: 'lock',
    size: 20,
    color: theme.colors.black,
})``
