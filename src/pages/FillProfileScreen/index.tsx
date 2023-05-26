import HeaderNavigation from '@components/HeaderNavigation';
import { Container } from '@theme/globalComponents';
import React from 'react';
import { View } from 'react-native';

const FillProfileScreen: React.FC<any> = ({ navigation }) => {
    return (
        <Container>
            <HeaderNavigation title='Fill Your Profile' navigation={navigation} />
        </Container>
    )
}

export default FillProfileScreen;