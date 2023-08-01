import Icon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { styled } from "styled-components/native";

export const CloseIonicons = styled(Ionicons).attrs<any>({
    name: 'close-sharp',
    size: 20,
    color: 'black'
})``
export const CloseIcon = styled(Icon).attrs<any>({
    name: 'close',
    size: 20,
    color: 'black'
})``

export const OptionsIcon = styled(MaterialCommunityIcons).attrs({
    name: 'dots-horizontal-circle-outline',
    size: 20,
    color: 'black'
})``

export const EyeIcons = styled(MaterialCommunityIcons).attrs<any>({
    name: 'eye-outline',
    size: 20,
    color: 'black'
})``

export const FavoriteIconStar = styled(Fontisto).attrs<any>({
    name: 'star',
    size: 20,
    color: 'black'
})``