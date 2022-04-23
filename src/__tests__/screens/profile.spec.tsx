import React from 'react'
import { render } from '@testing-library/react-native'
import { Profile } from '../../screens/Profile'

describe('Profile Screen', () => {
  test('Placeholder Selector', () => {
    const {
      debug,
      getByPlaceholderText
    
    } = render(<Profile />)
    // debug(); // Visualiza a renderização da page
    const inputName = getByPlaceholderText('Nome');  
    expect(inputName.props.placeholder).toBeTruthy();
    
  }) 
  
  test('TestId Selector', () => {
    const { getByTestId } = render(<Profile />)
    // debug(); // Visualiza a renderização da page
    const inputName = getByTestId('input-name');  
    const inputSurName = getByTestId('input-surname');  
    
    const textTitle = getByTestId('text-title');  
    expect(inputName.props.value).toEqual('');
    expect(inputName.props.value).toEqual('');
    expect(textTitle.props.children).toContain('Titulo');  
  }) 
})



 