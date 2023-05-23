import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from '../../globalStyles/globalComponents';
import theme from '../../globalStyles/theme';

const Loading = () => {
    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={30} color={theme.colors.black} />
        </Container>
    )
}

export default Loading;