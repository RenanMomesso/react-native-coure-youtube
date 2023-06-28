import AddImage from '@components/AddImage';
import HeaderNavigation from '@components/HeaderNavigation';
import { Container } from '@theme/globalComponents';
import React from 'react';

const QuizzGame: React.FC = ({ navigation }) => {
    return (
        <Container>
            <HeaderNavigation title='Create Quizzo' navigation={navigation} />
            <AddImage />

        </Container>
    )
}

export default QuizzGame;