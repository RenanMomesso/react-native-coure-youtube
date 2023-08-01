
import Text from '@components/Text';
import React from 'react';
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface BattleQuizzGameItemProps {
    title: string;
    image: string;
    text: string;
    onPress?: () => void;
}
const BattleQuizzGameItem: React.FC<Partial<BattleQuizzGameItemProps>> = ({ title, image, text, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} style={{ elevation: 4, backgroundColor: "white", marginBottom: 7, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Image source={{ uri: image }}
                style={{ width: '50%', resizeMode: 'stretch', height: 160, zIndex: 1 }}
            />

            <Text >{text}</Text>
        </TouchableWithoutFeedback>
    )
}

export default BattleQuizzGameItem;