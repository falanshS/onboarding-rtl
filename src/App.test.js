import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Tests for Counter App',()=>{
    it('Render initial UI', () => {
      render(<App />);
      expect(screen.getByRole('button', {
        name: /increment/i
      })).toBeDefined();      
      expect(screen.getByText(/0/i)).toBeDefined();
      expect(screen.getByRole('button', {
        name: /decrement/i
      })).toBeDefined();
    });

    it('Should have initial value 0', () => {
      render(<App />);
      expect(screen.getByText(/0/i)).toBeDefined();
    });

    it('Increment should increase the value by 1', () => {
      render(<App />);
      const incrementButton = screen.getByRole('button', {
        name: /increment/i
      });
      userEvent.click(incrementButton);
      expect(screen.getByText(/1/i)).toBeDefined();
    });

    it('Decrement should decrease the value by 1', () => {
      render(<App />);
      const decrementButton = screen.getByRole('button', {
        name: /decrement/i
      });
      userEvent.click(decrementButton);
      expect(screen.getByText(/-1/i)).toBeDefined();
      
    });
})
