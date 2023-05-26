import styled from "styled-components/native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export const CheckBoxContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-vertical: 14px;
    align-self: center;
`;

export const CheckBox = styled.View<{ checked: boolean }>`
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border-width: 2px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, checked }) => checked ? theme.colors.black : theme.colors.white};
`

export const CheckIcon = styled(Icons).attrs({
    name: 'check-bold',
    size: 14,
    color: "white"
})`
    top:-1px;
`
