import React from 'react';
import { Container, Line, TextStyled } from './LineWithText.styles'
import { ViewProps } from 'react-native'
import { IColors } from '@components/Text';

interface ILineWithTextProps extends ViewProps {
    text: string;
    marginVertical?: number;
    lineColor?: string;
    textColor?: IColors;
}

const HorizontalLineWithText = ({ text, marginVertical = 10, lineColor = '', textColor = 'black', ...rest }: ILineWithTextProps) => {
    return (
        <Container {...rest} testID='lineWithText-container' marginVertical={marginVertical}>
            <Line lineColor={lineColor} />
            <TextStyled size='text' color={textColor}>{text}</TextStyled>
            <Line lineColor={lineColor} />
        </Container>
    );
};



export default HorizontalLineWithText;
