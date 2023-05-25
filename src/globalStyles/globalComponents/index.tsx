import styled from 'styled-components/native'
import Anticon from 'react-native-vector-icons/AntDesign'

export const FaceBookSquareIcon = styled(Anticon).attrs({
    name: "facebook-square",
    color: "#3B5997",
    size: 25
})``;

export const GoogleIcon = styled(Anticon).attrs({
    name: "google",
    size: 25
})``;
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`
