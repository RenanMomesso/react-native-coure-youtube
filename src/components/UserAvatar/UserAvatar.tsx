import Text from '@components/Text';
import React from 'react';
import { View, Image } from 'react-native';

interface UserAvatarProps {
    image: string;
    userName: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ image, userName }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text size='text' style={{ fontSize: 11 }}>{userName}</Text>
            <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 100 }} />
        </View>
    )
}

export default UserAvatar;