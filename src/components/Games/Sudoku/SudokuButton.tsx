import Text from '@components/Text';
import React from 'react';
import { View, TouchableOpacity, Pressable, TouchableWithoutFeedback } from 'react-native';
import { SudokuNode } from './SudokuGrid';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export interface SudokuButtonProps {
    cell: SudokuNode
    handleCellClick: (row: number, col: number) => void;
    wrongCells?: {
        row: number[],
        col: number[],
        box: number[]
    }
}

const SudokuButton: React.FC<SudokuButtonProps> = ({ cell, handleCellClick, wrongCells }) => {
    const userID = useSelector((state: RootState) => state.user.userInfo?._id)

    const { col, row, value, isHighlighted, isModified } = cell;
    const wrongCol = wrongCells?.col;
    const wrongRow = wrongCells?.row;
    const wrongBox = wrongCells?.box;

    const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    const isWrongRow = wrongRow?.includes(row);
    const isWrongCol = wrongCol?.includes(col);
    const isWrongBox = wrongBox?.includes(box);

    const boxColor = () => {

        if (isWrongRow || isWrongCol || isWrongBox) {
            return '#f70000b3'
        }
        if (isHighlighted) {
            return '#f7f700b3'
        }

        if (isModified && !cell?.user) {
            return 'white'
        }
        if (!!cell?.user && cell?.user?.toString() !== userID?.toString()) {
            return 'lightgreen'
        }

        if (cell?.user?.toString() === userID?.toString()) {
            return 'lightblue'
        }




        return '#DDD'
    }

    return (
        <Pressable
            disabled={!isModified}
            style={{
                borderBottomWidth: row === 2 || row === 5 ? 2 : 1,
                borderBottomColor: 'black',
                borderRightColor: col === 2 || col === 5 || col === 8 ? 'black' : 'lightgray',
                borderRightWidth: col === 2 || col === 5 ? 3 : 1,
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderTopLeftRadius: row === 0 && col === 0 ? 8 : 0,
                borderTopRightRadius: row === 0 && col === 8 ? 8 : 0,
                borderBottomLeftRadius: row === 8 && col === 0 ? 8 : 0,
                borderBottomRightRadius: row === 8 && col === 8 ? 8 : 0,

                height: 40,
                width: 40,
                backgroundColor: boxColor()
            }}
            onPress={() => handleCellClick(row, col)}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text color='bolder' style={{ color: !isModified ? 'gray' : 'black' }} size='medium'>{value !== 0 ? value : " "}</Text>
            </View>
        </Pressable>
    )
}

export default SudokuButton;