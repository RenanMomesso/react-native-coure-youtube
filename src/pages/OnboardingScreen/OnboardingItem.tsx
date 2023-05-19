import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { IItemOnboarding } from '../../constants';
import Text from '../../components/Text';

const { width, height } = Dimensions.get('screen')
const OnboardingItem = ({ item }: { item: IItemOnboarding }) => {
    const { image, title } = item;
    return (
        <View style={{ flex: 1 }}>
            <Image source={image} style={{ height: height / 2, width, borderWidth: 1 }} />
            <Text style={{ marginTop: 20, width, paddingHorizontal: 20 }} size='heading' color='black'>{title}</Text>
        </View>
    )
}

export default OnboardingItem;