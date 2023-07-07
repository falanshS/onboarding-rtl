import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Tests for Counter App", () => {
  it("Should have initial value 0", () => {
    render(<App />);

    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  it("Increment button should be displayed", () => {
    render(<App />);
    const incrementButton = screen.getByRole("button", {
      name: "increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  it("Decrement button should be displayed", () => {
    render(<App />);
    const decrementButton = screen.getByRole("button", {
      name: "decrement",
    });
    expect(decrementButton).toBeInTheDocument();
  });

  it("On clicking increment button the counter should increase to 1", () => {
    render(<App />);
    const incrementButton = screen.getByRole("button", {
      name: "increment",
    });
    userEvent.click(incrementButton);
    const counterElement = screen.getByText("1");
    expect(counterElement).toBeInTheDocument();
  });

  it("On clicking decrement button the counter should decrease to -1", () => {
    render(<App />);
    const decrementButton = screen.getByRole("button", {
      name: "decrement",
    });
    userEvent.click(decrementButton);
    const counterElement = screen.getByText("-1");
    expect(counterElement).toBeInTheDocument();
  });
});

/**
 * Todo:
 * 1. Assert that the initial value is 0. Use getBy/findBy Query to find text '0' from the screen.
 * 2. use getByRole/findByRole query to find 'increment' button.
 * 3. Use userEvent to click on increment button to increment the count by 1.
 * 4. Assert that the count has value incremented by 1. i.e. the current value should become 1.
 * 5. Similarly perform actions 3 and 4 for decrement.
 *
 */
