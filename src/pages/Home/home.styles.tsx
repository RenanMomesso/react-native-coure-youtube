import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

export const IconHome = styled(Icon).attrs({
    name: 'home',
    size: 25,
})``
export const IconList = styled(Icon).attrs({
    name: 'category',
    size: 25,
})``

export const RightIconsWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: auto;
`

export const InviteFriendsBanner = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.black};
    height: 120px;
    width: 100%;
    border-radius: 8px;
    margin-top: 30px;
    overflow: hidden;
`