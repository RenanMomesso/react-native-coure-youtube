import React from 'react';
import { Container, Line, TextStyled } from './LineWithText.styles'

interface ILineWithTextProps {
    text: string;
    marginVertical?: number;
}

const HorizontalLineWithText = ({ text, marginVertical = 10 }: ILineWithTextProps) => {
    return (
        <Container testID='lineWithText-container' marginVertical={marginVertical}>
            <Line />
            <TextStyled>{text}</TextStyled>
            <Line />
        </Container>
    );
};



export default HorizontalLineWithText;
