import React, { useEffect, useRef } from 'react';
import Text from '@components/Text';
import { Container } from '@theme/globalComponents';
import { comparePaperScissorRock } from '@utils/games/PaperScissorRock';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components/native';
import { io } from 'socket.io-client'
import { Countdown } from 'react-native-element-timer';
import { PaperIcon, RockIcon, ScissorsIcon } from '@theme/globalComponents/icons';

const ButtonPick = styled.Pressable`
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

const socketIO = io("http://10.0.2.2:6000");
socketIO.on('connect', () => console.log("Connected Sudoku"))
type choices = 'paper' | 'scissor' | 'rock'
const PaperScissorRock: React.FC<{ solo?: boolean }> = ({ solo = true }) => {
    const countDownRef = useRef<any>(null)
    const userID = useSelector((state: any) => state.user.userInfo?._id)?.toString()
    const [gameVersus, setGameVersus] = React.useState<any>({
        userID,
        playerA: '',
        playerB: '',
        roomID: '',
        playerAScore: 0,
        playerBScore: 0,
        computerAChoice: '',
        computerBChoice: '',
        playerAChoice: '',
        playerBChoice: '',
        playerAMethod: '',
        playerBMethod: '',
    });
    const choices = ['rock', 'paper', 'scissor'];



    const myUser = userID === gameVersus.playerA ? gameVersus.playerA : gameVersus.playerB
    const myScore = userID === gameVersus.playerA ? gameVersus.playerAScore : gameVersus.playerBScore
    const noMyUser = userID !== gameVersus.playerA ? gameVersus.playerA : gameVersus.playerB
    const enemyScore = userID !== gameVersus.playerA ? gameVersus.playerAScore : gameVersus.playerBScore
    const computerAChoiceSocket = userID === gameVersus.playerA ? gameVersus.computerAChoice : gameVersus.computerBChoice
    const computerBChoiceSocket = userID !== gameVersus.playerA ? gameVersus.computerAChoice : gameVersus.computerBChoice
    const playerAMethodSocket = userID === gameVersus.playerA ? gameVersus.playerAMethod : gameVersus.playerBMethod
    const playerBMethodSocket = userID !== gameVersus.playerA ? gameVersus.playerAMethod : gameVersus.playerBMethod

    const handleUserChoice = (choice: choices) => {
        console.log("CHOICE:", choice)
        const winner = comparePaperScissorRock(choice, computerAChoiceSocket, playerAMethodSocket);
        socketIO.emit('rockPaperScissor', userID, winner === 'player' ? 50 : -50)
    }

    useEffect(() => {
        socketIO?.on(
            'rockPaperScissor users',
            (detailsBackend: any) => {

                setGameVersus(detailsBackend);
            },
        );
        socketIO?.emit('joinRockPaperScissor', userID);

        return () => socketIO?.emit('leaveRockPaperScissor', userID)
    }, [])

    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
            {!!noMyUser && <View style={{
                alignItems: 'center', justifyContent: 'center', transform: [{
                    translateY: -100,

                }, {
                    rotate: '180deg'
                }]
            }}>
                <Text>{noMyUser}</Text>
                <View>
                    <Text color='bolder'>Score: {enemyScore}</Text>
                </View>
                <View >
                    <Text color='bolder'>{computerBChoiceSocket}</Text>
                </View>
                <Text color='bolder'>{playerBMethodSocket}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <ButtonPick onPress={noMyUser ? null : () => handleUserChoice('paper')}>
                        <Text color='bolder'>Paper</Text>
                    </ButtonPick>

                    <ButtonPick onPress={noMyUser ? null : () => handleUserChoice('scissor')}>
                        <Text color='bolder'>Scissor</Text>
                    </ButtonPick>

                    <ButtonPick onPress={noMyUser ? null : () => handleUserChoice('rock')}>
                        <Text color='bolder'>rock</Text>
                    </ButtonPick>
                </View>

            </View>}

            <Countdown
                ref={countDownRef}
                initialSeconds={10}
                autoStart={true}
                direction="backward"
                formatSecondsRemaining={(seconds) => seconds}
                onTimeElapsed={() => console.log('Elapsed!')}
                allowFontScaling={true}
                style={{ fontSize: 30 }}
                onEnd={() => console.log('end')}

            />
            {!!myUser && <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>{myUser}</Text>
                <View>
                    <Text color='bolder'>Score: {myScore}</Text>
                </View>
                <View >
                    <Text color='bolder'>{computerAChoiceSocket}</Text>
                </View>
                <Text color='bolder'>{playerAMethodSocket}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <ButtonPick onPress={() => handleUserChoice('paper')}>
                        <RockIcon style={{ height: 65, width: 65 }} />
                    </ButtonPick>

                    <ButtonPick onPress={() => handleUserChoice('scissor')}>
                        <ScissorsIcon />
                    </ButtonPick>

                    <ButtonPick onPress={() => handleUserChoice('rock')}>
                        <PaperIcon />
                    </ButtonPick>
                </View>
            </View>}
        </Container>
    )
}

export default PaperScissorRock;



// const handleUserChoice = (choice: choices) => {
//     const computerChoice: any = choices[Math.floor(Math.random() * choices.length)];
//     const changeMethodRandom = Math.floor(Math.random() * 2);
//     const method = changeMethodRandom === 0 ? 'win' : 'lose';

//     setMethod(method);
//     setUserChoice(choice);

//     setComputerChoice(computerChoice);
//     const winner = comparePaperScissorRock(choice, computerChoice, method);
//     console.log(JSON.stringify({
//         winner,
//         userChoice: choice,
//         computerChoice,
//         method
//     }, undefined, 3))
//     if (winner === 'player') {
//         setScore(score + 1);
//     } else {
//         setScore(score - 1);
//     }

// }

// const generateComputerChoice = () => {
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     setComputerChoice(computerChoice);
// }
// useEffect(() => {
//     generateComputerChoice();
// }, [userChoice, computerChoice])