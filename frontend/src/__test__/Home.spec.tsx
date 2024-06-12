import { render, screen } from "@testing-library/react";
import Home from "./../components/Home/Home";

test("renders Home component", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});

test("renders Login component when loginVisible is true", () => {
  render(<Home />);
  const loginElement = screen.getByTestId("login");
  expect(loginElement).toBeInTheDocument();
});
