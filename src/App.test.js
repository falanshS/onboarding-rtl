import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tests for Todo App", () => {
  // Write tests for Todo App
  // Add and  Delete Todo

  it("adds todo", () => {
    render(<App />);

    const createButton = screen.getByRole("button", {
      name: /create/i,
    });

    userEvent.click(createButton);

    const updatedTodos = screen.getByText("1 todos");
    expect(updatedTodos.textContent).toBe("1 todos");
  });

  it("deletes todo", () => {
    render(<App />);

    const createButton = screen.getByRole("button", {
      name: /create/i,
    });

    userEvent.click(createButton);

    let updatedTodos = screen.getByText("1 todos");
    expect(updatedTodos.textContent).toBe("1 todos");

    const deleteButton = screen.getByRole("button", {
      name: /delete/i,
    });

    expect(deleteButton).toBeInTheDocument();
    userEvent.click(deleteButton);
    
    updatedTodos = screen.getByText("0 todos");
    expect(updatedTodos.textContent).toBe("0 todos");
  });
});
