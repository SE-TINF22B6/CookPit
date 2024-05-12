import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OpenAICall from "../components/openai/OpenAICall";
import axios from "axios";

jest.mock("axios");

test("renders OpenAICall component", () => {
  render(<OpenAICall />);
  const component = screen.getByTestId("outer_wrapper");
  expect(component).toBeInTheDocument();
});

test("input field and buttons are present", () => {
  render(<OpenAICall />);
  const inputField = screen.getByPlaceholderText("Zutaten hier eingeben");
  const addButton = screen.getByText("hinzufügen");
  const createButton = screen.getByText("Rezept erstellen");
  expect(inputField).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});

test("input field updates on change", () => {
  render(<OpenAICall />);
  const inputField = screen.getByPlaceholderText(
    "Zutaten hier eingeben"
  ) as HTMLInputElement;
  fireEvent.change(inputField, { target: { value: "test" } });
  expect(inputField.value).toBe("test");
});

test("add button adds input to ingredients list", () => {
  render(<OpenAICall />);
  const inputField = screen.getByPlaceholderText("Zutaten hier eingeben");
  const addButton = screen.getByText("hinzufügen");
  fireEvent.change(inputField, { target: { value: "test" } });
  fireEvent.click(addButton);
  const listItem = screen.getByText("test");
  expect(listItem).toBeInTheDocument();
});

test("create recipe button sends POST request", async () => {
  const mockResponse = { data: { result: "test recipe" } };
  (axios.post as jest.Mock).mockResolvedValue(mockResponse);
  render(<OpenAICall />);
  const createButton = screen.getByText("Rezept erstellen");
  fireEvent.click(createButton);
  expect(axios.post).toHaveBeenCalledWith(
    "http://localhost:3001/recipe-maker",
    { message: [] }
  );
});
