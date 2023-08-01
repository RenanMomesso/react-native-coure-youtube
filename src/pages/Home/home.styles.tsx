import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

export const IconHome = styled(Icon).attrs({
    name: 'home',
    size: 25,
})``
export const IconList = styled(Icon).attrs({
    name: 'home',
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

export const Shadow = styled.View`
  position: absolute;
  width: 100%;
  height: 120px;
  background-color: #021b0290;
  opacity: 0.5;
  border-radius: 12px;
  z-index: -1;
  margin-bottom: 0px;
  margin-right:10px;
  left: 0;
  bottom: -8;
  right: 0;
`