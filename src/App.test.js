import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Todo App',()=>{
    // Write tests for Todo App
    // Add and  Delete Todo
    it('should create a todo', async() => {
      render(<App/>)
      const todoField=screen.getByRole('textbox');
      expect(todoField).toBeInTheDocument();
      await userEvent.type(todoField,"todo test");

      const createBtn=screen.getByRole('button', {
        name: /create/i
      });
      expect(createBtn).toBeInTheDocument();
      userEvent.click(createBtn);

      const newTodo=screen.getByTestId("todo").querySelector('span');
      // console.log(newTodo)
      expect(newTodo).toBeInTheDocument();
      expect(newTodo.textContent).toBe("todo test")

    })

    it('should delete a created todo', async() => {
      render(<App/>)
      const todoField=screen.getByRole('textbox');
      expect(todoField).toBeInTheDocument();
      await userEvent.type(todoField,"todo test");

      const createBtn=screen.getByRole('button', {
        name: /create/i
      });
      expect(createBtn).toBeInTheDocument();
      userEvent.click(createBtn);

      const newTodo=screen.getByTestId("todo").querySelector('span');
      // console.log(newTodo)
      expect(newTodo).toBeInTheDocument();
      expect(newTodo.textContent).toBe("todo test")
      // screen.debug();
      const deleteBtn=screen.getByTestId("deleteButton");
      expect(deleteBtn).toBeInTheDocument();
      userEvent.click(deleteBtn);
      // screen.debug();
      expect(newTodo).not.toBeInTheDocument()
      
    })

})
