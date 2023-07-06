import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { click } from "@testing-library/user-event/dist/click";

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

describe("Tests for Login Form", () => {
  test("should All the elements renderd in the DOM", () => {
    render(<App />);
    const userNameLabelEle = screen.getByText(/username/i);
    const userNameFieldEle = screen.getByRole("textbox", {
      name: /username/i,
    });

    const passwordLabelEle = screen.getByText(/password/i);
    const passwordFieldEle = screen.getByLabelText(/password/i);

    const submitButtonEle = screen.getByRole("button", {
      name: /submit/i,
    });

    expect(userNameLabelEle).toBeInTheDocument();
    expect(userNameFieldEle).toBeInTheDocument();
    expect(passwordLabelEle).toBeInTheDocument();
    expect(passwordFieldEle).toBeInTheDocument();
    expect(submitButtonEle).toBeInTheDocument();
  });

  test("should submitting the form calls onSubmit with username and password", () => {
    let submittedData;

    const handleSubmit = (data) => {
      submittedData = data;
    };

    render(<App onSubmit={handleSubmit} />);

    const userNameFieldEle = screen.getByRole("textbox", {
      name: /username/i,
    });
    const passwordFieldEle = screen.getByLabelText(/password/i);
    const submitButtonEle = screen.getByRole("button", {
      name: /submit/i,
    });

    fireEvent.change(userNameFieldEle, { target: { value: "dhanish" } });
    fireEvent.change(passwordFieldEle, { target: { value: "123" } });

    userEvent.click(submitButtonEle);
    expect(submittedData).toEqual({ username: "dhanish", password: "123" });
  });
});
