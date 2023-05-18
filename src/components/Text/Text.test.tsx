import React from 'react';
import { render } from '@testing-library/react-native';
import Text, { FontFamily } from './index';

describe('Text', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Text>Hello, Testing!</Text>);
    expect(getByText('Hello, Testing!')).toBeTruthy();
  });

  it('applies custom font family', () => {
    const { getByTestId } = render(
      <Text size='button' testID="custom-font">
        Custom Font
      </Text>
    );
    const customFontElement = getByTestId('custom-font');
    expect(customFontElement.props.style).toHaveProperty(
      'fontFamily',
      FontFamily['Poppins-Medium']
    );
  });
});
