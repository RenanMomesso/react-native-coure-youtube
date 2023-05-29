import React from 'react';
import { Photo, PhotoButtonIcon, PhotoContainer } from './ProfilePhoto.styles';

const ProfilePhoto: React.FC = () => {
    return (
        <PhotoContainer>
            <Photo />
            <PhotoButtonIcon />
        </PhotoContainer>
    )
}

export default ProfilePhoto;