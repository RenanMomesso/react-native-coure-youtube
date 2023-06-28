import Text from '@components/Text';
import { Row } from '@theme/globalComponents';
import React, { useRef } from 'react';
import { Timer, Countdown } from 'react-native-element-timer';
import { StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
// import { Container } from './styles';
interface SudokuTimerProps {
    timerRef: any
    pauseGame: () => void
}
const SudokuTimer: React.FC<SudokuTimerProps> = ({ timerRef, pauseGame }) => {


    return (
        <Row style={{ alignItems: 'center', alignSelf: 'center', marginVertical: 10 }}>
            <Timer
                ref={timerRef}
                style={styles.timer}
                textStyle={styles.timerText}
                onTimes={e => { }}
                onPause={e => { }}
                onEnd={e => { }}
            />
            <Icon name="pausecircleo" size={30} color="black" onPress={pauseGame} />
        </Row>
    )
}

export default SudokuTimer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 40,
    },
    timer: {
        marginVertical: 10,
    },
    timerText: {
        fontSize: 20,
    },
    button: {
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 24,
        width: 100,
    },
});