import React from 'react';
import { View } from 'react-native';
import { PhotoButtonIcon, PhotoContainer } from './ProfilePhoto.styles';

const ProfilePhoto: React.FC = () => {
    return (
        <PhotoContainer>
            <PhotoButtonIcon />
        </PhotoContainer>
    )
}

export default ProfilePhoto;