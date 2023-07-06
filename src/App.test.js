import * as React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Write tests for Todo App
// Add and  Delete Todo

describe("Tests for Todo App", () => {
  test("Should create Todo", () => {
    render(<App />);

    const createFieldEle = screen.getByRole("textbox");
    const createButtonEle = screen.getByRole("button", {
      name: /create/i,
    });

    fireEvent.change(createFieldEle, { target: { value: "capillary" } });
    userEvent.click(createButtonEle);

    const todo = screen.getByTestId("todo");
    const todoEle = within(todo).getByText(/capillary/i);

    const todoCount = screen.getByText(/1 todos/i);

    expect(todoEle.innerHTML).toBe("capillary");
    expect(todoCount.innerHTML).toBe("1 todos");
  });

  test("Should delete Todo", () => {
    render(<App />);

    const createFieldEle = screen.getByRole("textbox");
    const createButtonEle = screen.getByRole("button", {
      name: /create/i,
    });

    fireEvent.change(createFieldEle, { target: { value: "capillary" } });
    userEvent.click(createButtonEle);

    const todo = screen.getByTestId("todo");
    const todoCount = screen.getByText(/1 todos/i);

    const deleteButtonEle = screen.getByRole("button", {
      name: /delete/i,
    });
    userEvent.click(deleteButtonEle);

    expect(todo).not.toBeInTheDocument();
    expect(todoCount.innerHTML).toBe("0 todos");
  });
});
