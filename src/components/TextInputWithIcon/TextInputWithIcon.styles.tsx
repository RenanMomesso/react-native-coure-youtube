
import styled from 'styled-components/native';
import theme from '../../globalStyles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconEyeProps {
  showPassword?: boolean;
}

export const InputContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
}) <{ isFocused?: boolean }>`
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: ${({ theme, isFocused }) => isFocused ? theme.colors.black : 'transparent'};
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

export const IconEye = styled(Icon).attrs((props: IconEyeProps) => ({
  name: props.showPassword ? 'eye-off' : 'eye',
  size: 20,
  color: theme.colors.black,
  ...props
}))``;
