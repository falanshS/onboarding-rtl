import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Testcases for Login form assignment", () => {
  test("Login form component should be rendered properly", () => {
    render(<App />);
    const username = screen.getByText(/username/i)
    const password = screen.getByText(/password/i)
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Login form should be working properly", () => {
    let submittedData = "";
    const handleSubmitButton = (data) => (submittedData = data);
    render(<App onSubmit={handleSubmitButton} />);
    userEvent.type(screen.getByLabelText("Username"), "ashish");
    userEvent.type(screen.getByLabelText("Password"), "123");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    console.log("Submitted Data: ", submittedData);
    expect(submittedData).toEqual({
      username: "ashish",
      password: "123",
    });
  });
});
