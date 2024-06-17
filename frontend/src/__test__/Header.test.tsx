import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import Header from "../components/Header/Header";

jest.mock("axios");

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Header component", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header-component");
    expect(headerElement).toBeInTheDocument();
  });

  test("displays the brand name and logo", () => {
    render(<Header />);
    const brandNameElement = screen.getByTestId("brand-name");
    const logoElement = screen.getByAltText("logo");
    expect(brandNameElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
  });

  test("displays the navigation links when window width is greater than 862", () => {
    global.innerWidth = 900;
    render(<Header />);
    const alleRezepteLink = screen.getByRole("link", { name: "Alle Rezepte" });
    const rezeptgeneratorLink = screen.getByRole("link", {
      name: "Rezeptgenerator",
    });
    const rezeptHochladenLink = screen.getByRole("link", {
      name: "Rezept hochladen",
    });
    expect(alleRezepteLink).toBeInTheDocument();
    expect(rezeptgeneratorLink).toBeInTheDocument();
    expect(rezeptHochladenLink).toBeInTheDocument();
  });

  test("displays the Drawer component when window width is less than or equal to 862", () => {
    global.innerWidth = 800;
    render(<Header />);
    const drawerElement = screen.getByTestId("drawer-component");
    expect(drawerElement).toBeInTheDocument();
  });

  test("displays the Login button when username is empty", () => {
    render(<Header />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("displays the username and dropdown menu when username is not empty", () => {
    render(<Header username="John" />);
    const usernameElement = screen.getByText("John");
    const dropdownMenu = screen.getByRole("menu");
    expect(usernameElement).toBeInTheDocument();
    expect(dropdownMenu).toBeInTheDocument();
  });

  test("calls the onToggleLogin function when Login button is clicked", () => {
    const onToggleLogin = jest.fn();
    render(<Header onToggleLogin={onToggleLogin} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    expect(onToggleLogin).toHaveBeenCalled();
  });

  test("calls the logout function when Log out menu item is clicked", async () => {
    const emptyUsername = jest.fn();
    render(<Header username="John" emptyusername={emptyUsername} />);
    const logoutMenuItem = screen.getByRole("menuitem", { name: "Log out" });
    axios.post.mockResolvedValueOnce({
      data: { loginmessage: "Logged out successfully" },
    });
    fireEvent.click(logoutMenuItem);
    expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/logout", {});
    await screen.findByText("Logged out successfully");
    expect(emptyUsername).toHaveBeenCalled();
  });
});
