import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

test("renders login component", () => {
  render(<Login />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "onepassword" } });

  expect(emailInput.value).toBe("test@gmail.com");
  expect(passwordInput.value).toBe("onepassword");
});
