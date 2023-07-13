import React, { useRef } from 'react';
import { TouchableOpacity, Modal, View, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '../Text';
import { OptionsIcon } from '@components/Quizzes/QuizzGame/QuizzGame.styled';

export interface PopupMenuOptions {
    label: string;
    Icon: string;
    onPress: () => void;
    disabled?: boolean;
}
export interface PopupMenuProps {
    options?: PopupMenuOptions[]
}


const PopupMenu = ({ options }: PopupMenuProps) => {
    const scale = useRef(new Animated.Value(0)).current

    const resizePopup = (to: number) => {
        to === 1 && setVisibleModal(true)
        Animated.timing(scale, {
            toValue: to,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.ease
        }).start(() => to === 0 && setVisibleModal(false))
    }
    const [visibleModal, setVisibleModal] = React.useState(false);
    return (
        <>
            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => resizePopup(1)}>
                <OptionsIcon name="pluscircle" size={20} color={'red'} />
            </TouchableOpacity>
            <Modal transparent visible={visibleModal}>
                <SafeAreaView style={{ flex: 1 }} onTouchStart={() => resizePopup(0)}>
                    <Animated.View style={{
                        position: 'absolute',
                        top: 40,
                        right: 20,
                        zIndex: 2,
                        padding: 12,
                        borderRadius: 8,
                        backgroundColor: 'white',
                        transform: [{ scale }],
                        elevation: 12,
                        opacity: scale.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]

                        }),


                    }}>
                        {options.map((item, index) => {
                            return (
                                <TouchableOpacity disabled={item.disabled} key={index} onPress={item.onPress} style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 6,
                                    borderBottomWidth: index === options.length - 1 ? 0 : 1,
                                    paddingBottom: 4,
                                    borderBottomColor: 'lightgray',
                                    opacity: item.disabled ? 0.5 : 1

                                }}>
                                    <AntDesign name={item.Icon} size={20} color={"#202020b2"} />
                                    <Text style={{ marginLeft: 6, color: "#202020d6" }} >{item.label}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </>
    )
}

export default PopupMenu;