import Button from '@components/Button';
import { Container } from '@theme/globalComponents';
import React from 'react';
import { CameraOptions, ImageLibraryOptions, Callback, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';
import { updateUser } from 'src/store/reducers/userReducer';

const ProfilePhotoButtons: React.FC = () => {
    const dispatch = useDispatch();
    const { closeBottomSheet } = useBottomSheet();

    type LaunchFunction = (options: ImageLibraryOptions | CameraOptions, callback: Callback) => void;

    const handleMedia = (launchFunction: LaunchFunction) => {
        return () => {
            launchFunction({ mediaType: 'photo' }, (response) => {
                if (response.didCancel || !!response.errorCode || !!response.errorMessage) return;
                closeBottomSheet();
                dispatch(updateUser({ profilePhoto: response.assets?.[0].uri || '' }));
            });
        };
    };

    const chooseFromGallery = handleMedia(launchImageLibrary);

    const takeAPicture = handleMedia(launchCamera);


    return (
        <Container>
            <Button text='Take a Picture' onClick={takeAPicture} />
            <Button text='Choose from Gallery' onClick={chooseFromGallery} />
        </Container>
    )
}

export default ProfilePhotoButtons;