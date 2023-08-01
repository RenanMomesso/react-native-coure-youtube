import React from 'react';
import { DeletePhotoIcon, Photo, PhotoButtonIcon, PhotoContainer } from './ProfilePhoto.styles';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';
import ProfilePhotoButtons from '@components/ProfilePhotoButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useKeyboard } from '@hooks/useKeyBoard';
import { updateUser } from 'src/store/reducers/userReducer';

const ProfilePhoto: React.FC = () => {
    const dispatch = useDispatch()
    const { dissmisKeyboard } = useKeyboard()
    const { openBottomSheet, closeBottomSheet, isOpen } = useBottomSheet()
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
        dispatch(updateUser({ profilePhoto: '' }));
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