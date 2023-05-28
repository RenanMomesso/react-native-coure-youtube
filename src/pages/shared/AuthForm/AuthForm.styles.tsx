import theme from "@theme/theme";
import { styled } from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconEyeProps {
    showPassword?: boolean;
    isFocused?: boolean;
}
export const TextInput = styled.TextInput.attrs({
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
