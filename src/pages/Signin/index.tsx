import React from 'react';
import { View, Text, Image } from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import { useNavigation } from '@react-navigation/native';
import { signinImage } from '../../constants/imagesLink';
import { Container } from '../../globalStyles/globalComponents';

const Signin: React.FC = () => {
    const navigation = useNavigation()
    return (
        <Container style={{ padding: 20 }}>
            <HeaderNavigation navigation={navigation} />
            <View style={{ borderRadius: 100, overflow: 'hidden', height: 250, width: 250, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Image source={{ uri: signinImage }} style={{
                    width: '100%',
                    borderRadius: 100,
                    height: '100%',
                    borderWidth: 1,
                    resizeMode: 'contain',


                }} />
            </View>
        </Container>
    )
}

export default Signin;