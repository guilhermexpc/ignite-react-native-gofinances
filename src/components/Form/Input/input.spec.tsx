import React from 'react'
import { render } from '@testing-library/react-native';

import { Input } from '.'
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

// Componente funcional
const Providers: React.FC = ({ children }) => {
   <ThemeProvider theme={theme}>
     {children}
    </ThemeProvider>
  
  

}

describe('Input Component', () => {
  test('Input', () => {
    const { getByTestId } = render(
      <Input 
        testID='input-email'
        placeholder='teste'
        autoCorrect={false}
      />,
      {
        wrapper: Providers
      }
    )
  })
})

