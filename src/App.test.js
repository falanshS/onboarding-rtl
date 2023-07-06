import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { createTodo, delay } from './tests/helpers';

describe("Tests for Todo App", () => {
  describe("Rendering", () => {
    it("should render the TodoList component without any todos", () => {
      render(<App />);
      expect(screen.getByText(/0 todos/i)).toBeDefined();
      expect(screen.getByText(/create a new todo\./i)).toBeDefined();
      expect(screen.getByRole('textbox')).toBeDefined();
      expect(screen.getByRole('button', {
        name: /create/i
      })).toBeDefined();
    });
  });

  describe("Deleting Todos", () => {
    it("should remove the corresponding todo item when delete button is clicked", async () => {
        render(<App />);
        createTodo('first todo');
        await delay(1000);

        const deleteButton = screen.getByRole('button', {
            name: /delete/i
        });
        userEvent.click(deleteButton);
        expect(screen.getByText(/0 todos/i)).toBeDefined();

    });
  });

  describe("Input Field", () => {
    it("should update the inputValue state when typing in the input field", () => {
        render(<App />);

        const todoInput = screen.getByRole('textbox');
        userEvent.type(todoInput, 'Test todo');

        expect(todoInput.value).toBe('Test todo')
    });
  });

  describe("Creating Todos", () => {
    it("should add a new todo to the list with the correct name when create button is clicked", async () => {
        render(<App />);
        createTodo('first todo');
        await delay(1000);

        expect(screen.getByText(/first todo/i)).toBeDefined();
        expect(screen.getByRole('button', {
            name: /delete/i
          })).toBeDefined();
    });
    it("should display the correct count of todos in the todoCount element", async () => {
        render(<App />);
        createTodo('first todo');
        await delay(1000);
        createTodo('second todo');
        await delay(1000);
        
        createTodo('third todo');
        await delay(1000);

        createTodo('fourth todo');
        await delay(1000);

        expect(screen.getByText(/4 todos/i)).toBeDefined();
    });
    it("should clear the input field value after creating a new todo", async () => {
        render(<App />);
        createTodo('first todo');
        await delay(1000);

        const todoInput = screen.getByRole('textbox');
        expect(todoInput.value).toBe('')

    });
  });
});
