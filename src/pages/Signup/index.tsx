import React from 'react';
import { View } from 'react-native';
import { Container } from '../../globalStyles/globalComponents';
import HeaderNavigation from '../../components/HeaderNavigation';


const SignupScreen: React.FC = ({ navigation }) => {
    return (
        <Container>
            <HeaderNavigation title='Sign up' navigation={navigation} />
        </Container>
    )
}

export default SignupScreen;