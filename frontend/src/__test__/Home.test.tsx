import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Home from "../components/Home/Home";

jest.mock("axios");

describe("Home", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Home component", () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home-component");
    expect(homeElement).toBeInTheDocument();
  });

  test("fetches all recipes on component mount", async () => {
    const mockRecipes = [
      { id: 1, name: "Recipe 1" },
      { id: 2, name: "Recipe 2" },
    ];
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: { results: mockRecipes },
    });

    render(<Home />);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3001/getallrecipe",
      {}
    );

    await screen.findByText("Recipe 1");
    expect(screen.getByText("Recipe 1")).toBeInTheDocument();
    expect(screen.getByText("Recipe 2")).toBeInTheDocument();
  });

  test("toggles login visibility on button click", () => {
    render(<Home />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    userEvent.click(loginButton);

    const loginComponent = screen.getByTestId("login-component");
    expect(loginComponent).toBeInTheDocument();

    userEvent.click(loginButton);
    expect(loginComponent).not.toBeInTheDocument();
  });
});
