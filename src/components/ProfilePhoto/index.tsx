import React from 'react';
import { DeletePhotoIcon, Photo, PhotoButtonIcon, PhotoContainer } from './ProfilePhoto.styles';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';
import ProfilePhotoButtons from '@components/ProfilePhotoButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useKeyboard } from '@hooks/useKeyBoard';
import { updateUserAction } from 'src/store/actions/userActions';
import { Alert } from 'react-native'

const ProfilePhoto: React.FC = () => {
    const dispatch = useDispatch()
    const { dissmisKeyboard } = useKeyboard()
    const { openBottomSheet, closeBottomSheet, isOpen } = useBottomSheet()
    console.log("🚀 ~ file: index.tsx:15 ~ isOpen:", isOpen)
    const { userInfo: {
        profilePhoto
    } } = useSelector((state: RootState) => state.user)

    const handleOPressBottomSheet = () => {
        
        if (isOpen) closeBottomSheet()
        else {
            dissmisKeyboard()
            openBottomSheet(<ProfilePhotoButtons />)
        }
    };

    const clearPhotoProfile = () => {
        closeBottomSheet();
        dispatch(updateUserAction({ profilePhoto: '' }));
    }

    return (
        <PhotoContainer>
            {profilePhoto && <DeletePhotoIcon onPress={clearPhotoProfile} />}
            <Photo userImage={profilePhoto} />
            <PhotoButtonIcon onPress={handleOPressBottomSheet} />
        </PhotoContainer>
    )
}

export default ProfilePhoto;