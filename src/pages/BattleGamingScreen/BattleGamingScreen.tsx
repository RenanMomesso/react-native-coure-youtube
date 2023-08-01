import PaperScissorRock from '@components/Games/PaperScissorRock';
import Sudoku from '@components/Games/Sudoku';
import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const BattleGamingScreen: React.FC = (props) => {
    const { route } = props;
    const { gameType } = route.params;

    const game = {
        'Sudoku': <Sudoku />,
        'JokemPo': <PaperScissorRock />

    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Game</Text>
            {game[gameType]}
        </View>
    )
}

export default BattleGamingScreen;