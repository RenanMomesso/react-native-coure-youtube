import React, { useState, useEffect, useRef } from 'react';
import Text from '@components/Text';
import { View, Alert, Modal } from 'react-native';
import { checkBoard, createSudokuGrid } from "@utils/games/Sudoku/sudoku-utils"
import SudokuGrid, { SudokuNode } from './SudokuGrid';
import SudokuNumbers from './SudokuNumbers';
import SudoButtonsBottom from './BottomButtons';
import SudokuTimer from './SudokuTimer';
import Button from '@components/Button';

export type SudokuLevel = 'easy' | 'medium' | 'hard' | 'expert';
const Sudoku: React.FC = () => {
    const timerRef = useRef<{
        start: () => void;
        pause: () => void;
        resume: () => void;
    }>(null);
    const [paused, setPaused] = useState(false);
    const [grid, setGrid] = useState<any>([]);
    const [wrongCells, setWrongCells] = useState<any>(null);
    const createNewGame = () => {
        timerRef.current?.start();
        setWrongCells(null)
        const grid = createSudokuGrid(50);
        const shadowCopy = [...grid];
        findAndHighlightFirstZero(shadowCopy);
        setGrid(shadowCopy);
    };

    const findAndHighlightFirstZero = (grid: SudokuNode[][]) => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid[i][j].value === 0) {
                    grid[i][j].isHighlighted = true;
                    return;
                }
            }
        }
    };

    useEffect(() => {
        createNewGame();
    }, []);

    const handleCellClick = (row: number, col: number) => {
        const newGrid = [...grid];
        const cell = newGrid[row][col];
        //all previous highlighted cells are no longer highlighted
        if (!cell.isModified) return;
        newGrid.forEach((row: any) => {
            row.forEach((cell: any) => {
                cell.isHighlighted = false
            });
        });
        cell.isHighlighted = true;

        setGrid(newGrid);
    };

    const handleNumberClick = (number: number) => {

        setGrid((prevGrid: SudokuNode[][]) => {
            setWrongCells(null)
            return prevGrid.map(row => {
                return row.map(cell => {

                    if (cell.isHighlighted && cell.isModified) {
                        return { ...cell, value: number };
                    }
                    return cell;
                });
            });
        });
    };

    const finishGame = () => {
        const copyGrid = [...grid];
        //check if there are any cells with value 0
        const isGameFinished = copyGrid.every((row: any) => {
            return row.every((cell: any) => cell.value !== 0)
        });

        if (!isGameFinished) {
            Alert.alert('You have to complete all cells!');
            return;
        }

        const checkBoardGrid = checkBoard(copyGrid);
        if (!!checkBoardGrid.col.length && !!checkBoardGrid.row.length || !!checkBoardGrid.box.length) {
            Alert.alert('Voce errou')
            setWrongCells(checkBoardGrid)
            return;
        }
        Alert.alert('Voce acertou')


    }

    const pauseGame = () => {
        timerRef.current?.pause();
        setPaused(true);
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Modal visible={paused} transparent={true} animationType="slide" onRequestClose={() => setPaused(false)}>
                <View style={{ flex: 1, backgroundColor: "white", margin: 65 }}>
                    <Text color="bolder">Game Paused</Text>
                    <View style={{ height: 40, width: '100%' }}>

                        <Button text='Continue' onClick={() => {
                            setPaused(false);
                            timerRef.current?.resume();
                        }} />
                    </View>
                </View>
            </Modal>
            <SudokuTimer timerRef={timerRef} pauseGame={pauseGame} />
            <SudokuGrid grid={grid as any[]} handleCellClick={handleCellClick} wrongCells={wrongCells} />
            <SudokuNumbers handleNumberClick={handleNumberClick} />
            <SudoButtonsBottom startNewGame={createNewGame} finishGame={finishGame} />
        </View>
    )
}

export default Sudoku;
