import Button from '@components/Button';
import React from 'react';
import { View } from 'react-native';


interface SudoButtonsBottomProps {
    startNewGame: () => void;
    finishGame: () => void;
}

const SudoButtonsBottom: React.FC<SudoButtonsBottomProps> = ({ startNewGame, finishGame }) => {
    return (
        <View style={{ alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row', gap: 10, flex: 1 }}>
            <Button onClick={startNewGame} text='New game' />
            <Button onClick={finishGame} text='Finish game' />

        </View>
    )
}

export default SudoButtonsBottom;