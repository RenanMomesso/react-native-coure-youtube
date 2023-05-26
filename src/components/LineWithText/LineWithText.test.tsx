import React from 'react';
import HorizontalLineWithText from '.';
import { render } from '../../utils-test/Test-utils';

describe('HorizontalLineWithText', () => {
    it('renders correctly with default marginVertical value', () => {
        const { getByText, getAllByTestId } = render(
            <HorizontalLineWithText text="Test Text" />
        );

        const middleText = getByText('Test Text');
        const lines = getAllByTestId('lineWithText-line');
        expect(middleText).toBeTruthy();
        expect(lines).toHaveLength(2);
        expect(lines[0].props.style).toHaveProperty('flexGrow', 1);
        expect(lines[1].props.style).toHaveProperty('backgroundColor', "#cccc");


    });

    it('renders correctly with custom marginVertical value', () => {
        const { getByTestId } = render(
            <HorizontalLineWithText text="Test Text" marginVertical={20} />
        );

        const container = getByTestId('lineWithText-container');

        expect(container).toBeTruthy();
        expect(container.props.style).toHaveProperty('marginVertical', 20);
    });
});
