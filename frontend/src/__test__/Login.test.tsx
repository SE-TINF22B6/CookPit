import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Login from "../components/Login/Login";

jest.mock("axios");

describe("Login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Login component", () => {
    render(<Login onData={() => {}} />);
    const loginElement = screen.getByTestId("login-component");
    expect(loginElement).toBeInTheDocument();
  });

  test("registers a user", async () => {
    const mockResponse = {
      data: { loginmessage: "Registration successful" },
    };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    render(<Login onData={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("  Username");
    const passwordInput = screen.getByPlaceholderText("  Password");
    const registerButton = screen.getByText("Registrieren");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3001/register",
        {
          username: "testuser",
          password: "testpassword",
        }
      );
      expect(screen.getByText("Registration successful")).toBeInTheDocument();
    });
  });

  test("logs in a user", async () => {
    const mockResponse = {
      data: {
        success: true,
        loginmessage: "Login successful",
        token: "testtoken",
      },
    };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    const onDataMock = jest.fn();
    const onToggleLoginMock = jest.fn();

    render(<Login onData={onDataMock} onToggleLogin={onToggleLoginMock} />);
    const usernameInput = screen.getByPlaceholderText("  Username");
    const passwordInput = screen.getByPlaceholderText("  Password");
    const loginButton = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/login", {
        username: "testuser",
        password: "testpassword",
      });
      expect(onDataMock).toHaveBeenCalledWith("testuser");
      expect(screen.getByText("Login successful")).toBeInTheDocument();
      expect(localStorage.getItem("token")).toBe("testtoken");
      expect(onToggleLoginMock).toHaveBeenCalled();
    });
  });

  test("toggles between login and register", () => {
    render(<Login onData={() => {}} />);
    const toggleLabel = screen.getByText("Registrieren");
    const toggleButton = screen.getByText("Login");

    fireEvent.click(toggleLabel);
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(toggleLabel).toBeInTheDocument();
  });
});
