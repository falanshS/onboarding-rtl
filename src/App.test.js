import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Login Form',()=>{
    it('submitting the form calls onSubmit with username and password', () => {
      const inputProps = {
        username: 'anurag',
        password: '123'
      }
      let submittedData;
      const handleSubmit = data => (submittedData = data)
      render(<App onSubmit={handleSubmit}/>);
      
      const usernameInput = screen.getByRole('textbox', {  name: /username/i});
      userEvent.type(usernameInput, inputProps.username);


      const passwordInput = screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, inputProps.password);

      const submitButton = screen.getByRole('button');
      userEvent.click(submitButton);

      expect(submittedData).toStrictEqual(inputProps);
    })
})
