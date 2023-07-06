import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

export const createTodo = (todo) => {
    const todoInput = screen.getByRole('textbox');
    userEvent.type(todoInput, todo);

    const createButton = screen.getByRole('button', {
        name: /create/i
    });
    createButton.click();
}

export const delay = async (time) => {
    await new Promise((r) => setTimeout(r, time));
}