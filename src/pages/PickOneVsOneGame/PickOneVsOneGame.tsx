import Button from '@components/Button';
import React from 'react';
import { View, Text } from 'react-native';
import { ScreenName } from 'src/dtos';

const PickOneVsOneGame: React.FC = ({ navigation }) => {
    const handleNavigation = (navigationTo: ScreenName, gameType) => {
        navigation.navigate(navigationTo as never, {
            gameType: 'JokemPo'
        })
    }
    return (
        <View style={{ flex: 1 }}>
            <Text>Game</Text>
            <Button text='JokemPo' onClick={() => handleNavigation('BattleGameScreen', {
                gameType: 'JokemPo'
            })} />
        </View>
    )
}

export default PickOneVsOneGame;