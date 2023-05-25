import React from 'react';
import { Container, Line, TextStyled } from './LineWithText.styles'
import { ViewProps } from 'react-native'

interface ILineWithTextProps extends ViewProps {
    text: string;
    marginVertical?: number;
}

const HorizontalLineWithText = ({ text, marginVertical = 10, ...rest }: ILineWithTextProps) => {
    return (
        <Container {...rest} testID='lineWithText-container' marginVertical={marginVertical}>
            <Line />
            <TextStyled>{text}</TextStyled>
            <Line />
        </Container>
    );
};



export default HorizontalLineWithText;
