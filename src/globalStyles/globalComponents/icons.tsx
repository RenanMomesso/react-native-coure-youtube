import Icon from "react-native-vector-icons/AntDesign";
import { styled } from "styled-components/native";

export const PlusIcon = styled(Icon).attrs({
    name: "plus",
    color: "white",
    size: 25
})`
`;


export const HomeIcon = styled(Icon).attrs({
    name: "home",
    color: props => props.color || "white",
    size: 25
})`
`;