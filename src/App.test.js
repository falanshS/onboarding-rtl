import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tests for Todo App", () => {
  // Write tests for Todo App
  // Add and  Delete Todo
  const delay = async (time) => {
    await new Promise((r) => setTimeout(r, time));
  };

  it("UI should rendered properly", () => {
    render(<App />);
    expect(screen.getByText(/0 todos/i)).toBeInTheDocument();
    expect(screen.getByText(/create a new todo\./i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /create/i,
      })
    ).toBeInTheDocument();
  });

  it("when typing in the input field inputValue should be update", () => {
    render(<App />);

    const InputField = screen.getByRole("textbox");
    fireEvent.change(InputField, { target: { value: "Read about testing" } });

    expect(InputField.value).toBe("Read about testing");
  });

  it("creating new todo", async () => {
    render(<App />); //step-1 UI will render
    //step-2 enter todo value in the input field after that click on create button
    const InputField = screen.getByRole("textbox");
    fireEvent.change(InputField, {
      target: { value: "adding new todo for testing" },
    });
    const createButton = screen.getByRole("button", {
      name: /create/i,
    });
    userEvent.click(createButton);
    await delay(500);
    // step-4 check for todo text and delete button
    expect(
      screen.getByText(/adding new todo for testing/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /delete/i,
      })
    ).toBeInTheDocument();
  });

  it("deleting todo", async () => {
    render(<App />); //step-1 UI will render
    //step-2 create new todo
    const InputField = screen.getByRole("textbox");
    fireEvent.change(InputField, { target: { value: "test todo" } });
    const createButton = screen.getByRole("button", {
      name: /create/i,
    });
    userEvent.click(createButton);
    await delay(500);
    // step-3 check for todo text and delete button
    expect(screen.getByText(/test todo/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /delete/i,
      })
    ).toBeInTheDocument();

    const deleteButton = screen.getByRole("button", {
      name: /delete/i,
    });
    userEvent.click(deleteButton);
    expect(screen.getByText(/0 todos/i)).toBeInTheDocument();
  });

  it("should display correct count of todos on screen", async () => {
    render(<App />);

    const InputField = screen.getByRole("textbox");
    fireEvent.change(InputField, { target: { value: "test todo1" } });
    const createButton = screen.getByRole("button", {
      name: /create/i,
    });
    userEvent.click(createButton);
    await delay(500);

    fireEvent.change(InputField, { target: { value: "test todo2" } });
    userEvent.click(createButton);
    await delay(500);

    expect(screen.getByText(/2 todos/i)).toBeInTheDocument();
  });

  it("input field should be clear after clicking on create button", async () => {
    render(<App />);
    //create todo
    const InputField = screen.getByRole("textbox");
    fireEvent.change(InputField, { target: { value: "testing" } });
    const createButton = screen.getByRole("button", {
      name: /create/i,
    });
    userEvent.click(createButton)
    await delay(1000);
    //check input field is clear or not
    const InputFieldAfterCreatingTodo =
      screen.getByPlaceholderText(/new todo/i);
    expect(InputFieldAfterCreatingTodo.innerHTML).toBe("");
  });
});
