import HeaderNavigation from '@components/HeaderNavigation';
import useAndroidBackHandler from '@hooks/useBackHandler';
import { Container } from '@theme/globalComponents';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUserAction } from 'src/store/actions/userActions';

const FillProfileScreen: React.FC<any> = ({ navigation }) => {

    const dispatch = useDispatch();
    const handleGoBack = (): void => {
        dispatch(clearUserAction())
    }

    useAndroidBackHandler(() => {
        handleGoBack();
        return true;
    });

    return (
        <Container>
            <HeaderNavigation title='Fill Your Profile' navigation={navigation} onPress={handleGoBack} />
        </Container>
    )
}

export default FillProfileScreen;