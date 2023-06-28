import Text from '@components/Text';
import React from 'react';
import { View } from 'react-native';
import { styled } from 'styled-components/native';

const ButtonNumber = styled.TouchableOpacity`
    flex: 1;
  justify-content: center;
  align-items: center;
  border-color: lightgray;
  border-width: 1px;
  width: 35px;
  height: 45px;
  border-radius: 8px;
  elevation:2;
  background-color: white;
`

const OptionsNumberLineOne = [1, 2, 3, 4, 5]
const OptionsNumberLineTwo = [6, 7, 8, 9, 0]

interface SudokuNumbersProps {
    handleNumberClick: (number: number) => void;
}

const SudokuNumbers: React.FC<SudokuNumbersProps> = ({ handleNumberClick }) => {
    return (
        <View style={{ flexDirection: 'column', marginTop: 20, padding: 15, gap: 5 }}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                {OptionsNumberLineOne.map((number, index) => {
                    return (
                        <ButtonNumber onPress={() => handleNumberClick(number)} key={index}>
                            <Text color='black' size='medium'>{number}</Text>
                        </ButtonNumber>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                {OptionsNumberLineTwo.map((number, index) => {
                    return (
                        <ButtonNumber onPress={() => handleNumberClick(number)} key={index}>
                            <Text color='black' size='medium'>{number === 0 ? 'C' : number}</Text>
                        </ButtonNumber>
                    )
                })}
            </View>
        </View>
    )
}

export default SudokuNumbers;