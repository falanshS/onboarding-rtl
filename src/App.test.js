import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Login Form',()=>{
    it('submitting the form calls onSubmit with username and password', async() => {

        let submittedData="";
        const handleSubmit = data => (submittedData=data);
        render(<App onSubmit={handleSubmit}/>)

        const userName=screen.getByLabelText(/username/i);
        expect(userName).toBeInTheDocument();
        await userEvent.type(userName,"username");

        const password=screen.getByLabelText(/password/i);
        expect(password).toBeInTheDocument();
        await userEvent.type(password,"password");

        const submitBtn=screen.getByRole('button', {
          name: /submit/i
        });
        console.log(submittedData)

        expect(submitBtn).toBeInTheDocument();
        userEvent.click(submitBtn);

        console.log(submittedData)
        expect(submittedData).toEqual({username:"username",password:"password"});

        // create a variable called "submittedData" and a handleSubmit function that
        // accepts the data and assigns submittedData to the data that was submitted
        // Hint: if you need a hand, here's what the handleSubmit function should do:
        // const handleSubmit = data => (submittedData = data)
        //
        // render the login with your handleSubmit function as the onSubmit prop
        //
        // get the username and password fields via `getByLabelText`
        // use `await userEvent.type...` to change the username and password fields to
        //    whatever you want
        //
        // click on the button with the text "Submit"
        //
        // assert that submittedData is correct
        // Hint: use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
      })
})
