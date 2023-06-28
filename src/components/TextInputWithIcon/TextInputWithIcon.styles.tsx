
import styled from 'styled-components/native';
import theme from '../../globalStyles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaskInput from 'react-native-mask-input';

interface IconEyeProps {
  showPassword?: boolean;
  isFocused?: boolean;
}

interface InputContainerProps {
  isFocused?: boolean;
  topTitle?: boolean;
}

export const InputContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<InputContainerProps>`
  flex-direction: row;
  align-items: center;
  border-width: ${({ topTitle }) => topTitle ? 0 : 2}px;
  border-color: ${({ theme, isFocused, topTitle }) => isFocused ? theme.colors.black : topTitle ? '#7052ff ' : 'transparent'};
  padding: 0px ${({ topTitle }) => topTitle ? 0 : 18}px;
  background-color: ${({ theme, topTitle }) => topTitle ? 'white' : theme.colors.lightGray};
  border-radius: ${({ topTitle }) => topTitle ? 0 : 12}px;
  /* elevation:2; */
  gap: 8px;
  margin-vertical: 10px;
  border-bottom-width: ${({ topTitle }) => topTitle ? 2 : 0}px;
  `;

export const TextInput = styled(MaskInput).attrs({
  selectionColor: theme.colors.black,
})`
  flex:1;
  font-family: ${({ theme }) => theme.sizes.fontFamily.PoppinsSemiBold};
  font-size: ${({ theme }) => theme.sizes.fontSize.small}px;
  top: 1px;
  padding:0px;
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

export const ArrowDownIcon = styled(Icon).attrs((props: any) => ({
  name: 'arrow-down',
  size: 20,
  color:  theme.colors.black,
  ...props
}))``;


