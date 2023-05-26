import React from 'react';
import { render } from '@testing-library/react-native';
import Text, { FontFamily } from './index';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../globalStyles/theme';

describe('Text', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Text>Hello, Testing!</Text>
      </ThemeProvider>
    );
    expect(getByText('Hello, Testing!')).toBeTruthy();
  });

  it('applies custom font family', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Text size='button' testID="custom-font">
          Custom Font
        </Text>
      </ThemeProvider>
    );
    const customFontElement = getByTestId('custom-font');
    expect(customFontElement.props.style).toHaveProperty(
      'fontFamily',
      FontFamily['Inter-SemiBold']
    );
  });
});
