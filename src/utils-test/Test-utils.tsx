// test-utils.js
import { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../globalStyles/theme';
import { Provider } from 'react-redux';
import { store } from '../store';

type CustomRenderProps = {

} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>,
    renderOptions
  )
// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
