import React from 'react';
import { View } from 'react-native';
import SudokuButton from './SudokuButton';

export interface SudokuNode {
    value: number;
    row: number;
    col: number;
    isModified: boolean;
    isHighlighted: boolean;

}
export interface SudokuGridProps {
    grid: SudokuNode[][]
    handleCellClick: (row: number, col: number) => void;
    wrongCells?: {
        row: number[],
        col: number[],
        box: number[]
    }
}

const SudokuGrid: React.FC<SudokuGridProps> = ({ grid, handleCellClick, wrongCells }) => {

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 8 }}>
            {grid.map((row, rowIndex) => {
                return (
                    <View key={rowIndex} style={{
                        flexDirection: 'row',
                        borderRadius: 8,
                        borderColor: 'red',
                        // borderWidth: row[rowIndex].row === 0 || row[rowIndex].row === 8 ? 1 : 0
                    }}>
                        {row?.map((cell, cellIndex) => {
                            return (
                                <SudokuButton cell={cell} key={cellIndex} handleCellClick={handleCellClick} wrongCells={wrongCells} />
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

export default SudokuGrid;