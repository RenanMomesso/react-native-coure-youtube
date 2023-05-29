import { styled } from "styled-components/native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export const PhotoContainer = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-vertical: 30px;
    background-color: lightblue;
`

export const Photo = styled.Image.attrs((props: any) => ({
    source: props.source || require('@assets/images/userprofile.png'),
    ...props
}))`
    width: 100%;
    height: 100%;
`;

export const PhotoButtonIcon = styled(Icons).attrs({
    name: 'camera',
    size: 20,
    color: "white"
})`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.normalBlack};
    border-radius: 15px;
    padding:5px;
`