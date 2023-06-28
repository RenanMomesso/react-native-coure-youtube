import AddImage from '@components/AddImage';
import HeaderNavigation from '@components/HeaderNavigation';
import Text from '@components/Text';
import { Container } from '@theme/globalComponents';
import React from 'react';
import { View } from 'react-native';


const CreateQuestion: React.FC = ({ navigation }) => {
    return (
        <Container style={{ padding: 20 }}>
            <HeaderNavigation title='Create Quizzo' navigation={navigation} />
            <AddImage style={{ marginTop: 20 }} />
        </Container>
    )
}

export default CreateQuestion;