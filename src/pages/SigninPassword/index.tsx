import React from 'react';
import { View } from 'react-native';
import { Container } from '../../globalStyles/globalComponents';
import HeaderNavigation from '../../components/HeaderNavigation';

// import { Container } from './styles';

const SigninPassword: React.FC = ({ navigation }) => {
    return (
        <Container>
            <HeaderNavigation title='Sign in' navigation={navigation} />
        </Container>
    )
}

export default SigninPassword;