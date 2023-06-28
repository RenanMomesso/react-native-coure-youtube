import Text from '@components/Text';
import { Container } from '@theme/globalComponents';
import { comparePaperScissorRock } from '@utils/games/PaperScissorRock';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { styled } from 'styled-components/native';

const ButtonPick = styled.Pressable`
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

// import { Container } from './styles';
type choices = 'paper' | 'scissor' | 'rock'
const PaperScissorRock: React.FC = () => {
    const [score, setScore] = React.useState(0);
    const [userChoice, setUserChoice] = React.useState('');
    const [computerChoice, setComputerChoice] = React.useState('');
    const [method, setMethod] = React.useState<'win' | 'lose'>('win');

    const choices = ['rock', 'paper', 'scissor'];

    const handleUserChoice = (choice: choices) => {
        const computerChoice: any = choices[Math.floor(Math.random() * choices.length)];
        const changeMethodRandom = Math.floor(Math.random() * 2);
        const method = changeMethodRandom === 0 ? 'win' : 'lose';

        setMethod(method);
        setUserChoice(choice);

        setComputerChoice(computerChoice);
        const winner = comparePaperScissorRock(choice, computerChoice, method);
        console.log(JSON.stringify({
            winner,
            userChoice: choice,
            computerChoice,
            method
        }, undefined, 3))
        if (winner === 'player') {
            setScore(score + 1);
        } else {
            setScore(score - 1);
        }

    }

    const generateComputerChoice = () => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(computerChoice);
    }
    useEffect(() => {
        generateComputerChoice();
    }, [userChoice, computerChoice])

    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text color='bolder'>Score: {score}</Text>
            </View>
            <View >
                <Text color='bolder'>{computerChoice}</Text>
            </View>
            <Text color='bolder'>{method}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <ButtonPick onPress={() => handleUserChoice('paper')}>
                    <Text color='bolder'>Paper</Text>
                </ButtonPick>

                <ButtonPick onPress={() => handleUserChoice('scissor')}>
                    <Text color='bolder'>Scissor</Text>
                </ButtonPick>

                <ButtonPick onPress={() => handleUserChoice('rock')}>
                    <Text color='bolder'>rock</Text>
                </ButtonPick>
            </View>
        </Container>
    )
}

export default PaperScissorRock;