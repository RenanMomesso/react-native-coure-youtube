import 'react-native';
import React from 'react';
import Button from '../Button';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../globalStyles/theme';
describe('Button', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Button onClick={() => { }} />
            </ThemeProvider>
        )
        const button = getByTestId('button-component')
        expect(button).toBeTruthy()
    });

    it('should call onClick when clicked', () => {
        const onClick = jest.fn()
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Button onClick={onClick} />
            </ThemeProvider>)
        const button = getByTestId('button-component')
        fireEvent.press(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("should have bg color and text color as default if no one were picked", () => {
        const { getByTestId, getByText } = render(
            <ThemeProvider theme={theme}>
                <Button text='Press Me' />
            </ThemeProvider>)
        const button = getByTestId('button-component')
        const text = getByText('Press Me')
        expect(button.props.style.backgroundColor).toBe(theme.colors.black)
        expect(text.props.style.color).toBe('#FFF')
    })

    it("should have blue color, doesn't have text if circle were passed", () => {
        const { getByTestId, queryByText } = render(
            <ThemeProvider theme={theme}>
                <Button text='Press Me' bgColor='blue' circle />
            </ThemeProvider>)
        const button = getByTestId('button-component')
        const text = queryByText('Press Me')
        expect(button.props.style.borderTopLeftRadius).toBe(50)
        expect(button.props.style.borderBottomRightRadius).toBe(50)
        expect(button.props.style.backgroundColor).toBe('blue')
        expect(text).toBeNull()
    })
});
