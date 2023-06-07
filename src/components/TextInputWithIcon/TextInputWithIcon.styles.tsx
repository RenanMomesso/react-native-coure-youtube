
import styled from 'styled-components/native';
import theme from '../../globalStyles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaskInput from 'react-native-mask-input';

interface IconEyeProps {
  showPassword?: boolean;
  isFocused?: boolean;
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
  border-radius: 12px;
  /* elevation:2; */
  gap: 8px;
  margin-vertical: 10px;
  `;

export const TextInput = styled(MaskInput).attrs({
  selectionColor: theme.colors.black,
})`
  flex:1;
  font-family: ${({ theme }) => theme.sizes.fontFamily.PoppinsSemiBold};
  font-size: ${({ theme }) => theme.sizes.fontSize.small}px;
  top: 1px;
`;

export const EmailIcon = styled(Icon).attrs((props: { isFocused?: boolean }) => ({
  name: 'email',
  size: 20,
  color: props.isFocused ? theme.colors.black : theme.colors.disabledBlack,
  ...props
}))``

export const PasswordIcon = styled(Icon).attrs((props: { isFocused?: boolean }) => ({
  name: 'lock',
  size: 20,
  color: props.isFocused ? theme.colors.black : theme.colors.disabledBlack,
  ...props
}))``

export const IconEye = styled(Icon).attrs((props: IconEyeProps) => ({
  name: props.showPassword ? 'eye-off' : 'eye',
  size: 20,
  color: props.isFocused ? theme.colors.black : theme.colors.disabledBlack,
  ...props
}))``;
