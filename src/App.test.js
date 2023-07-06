import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

/**
 * Todo:
 * 1. Assert that the initial value is 0. Use getBy/findBy Query to find text '0' from the screen.
 * 2. use getByRole/findByRole query to find 'increment' button.
 * 3. Use userEvent to click on increment button to increment the count by 1.
 * 4. Assert that the count has value incremented by 1. i.e. the current value should become 1.
 * 5. Similarly perform actions 3 and 4 for decrement.
 *
 */

describe("Tests for Counter App", () => {
  test("Should Count have initial value 0", () => {
    render(<App />);

    const countEle = screen.getByText(/0/i);
    expect(countEle).toBeInTheDocument();
  });

  test("Should Increment button rendered", () => {
    render(<App />);

    const IncrementBtnEle = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(IncrementBtnEle).toBeInTheDocument();
  });

  test("Should Decrement button rendered", () => {
    render(<App />);

    const DecrementBtnEle = screen.getByRole("button", {
      name: /decrement/i,
    });
    expect(DecrementBtnEle).toBeInTheDocument();
  });

  test("Should have Count value 1 after Increment", () => {
    render(<App />);

    const IncrementBtnEle = screen.getByRole("button", {
      name: /increment/i,
    });

    userEvent.click(IncrementBtnEle);

    const countEle = screen.getByText(/1/i);
    expect(countEle).toBeInTheDocument();
  });

  test("Should have Count value -1 after Decrement", () => {
    render(<App />);

    const DecrementBtnEle = screen.getByRole("button", {
      name: /decrement/i,
    });

    userEvent.click(DecrementBtnEle);

    const countEle = screen.getByText(/-1/i);
    expect(countEle).toBeInTheDocument();
  });
});
