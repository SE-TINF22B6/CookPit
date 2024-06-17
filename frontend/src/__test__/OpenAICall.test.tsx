import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OpenAICall from "../components/openai/OpenAICall";

describe("OpenAICall", () => {
  test("renders the OpenAICall component", () => {
    render(<OpenAICall />);
    const inputElement = screen.getByPlaceholderText("Zutaten hier eingeben");
    const addButton = screen.getByText("hinzufügen");
    const createRecipeButton = screen.getByText("Rezept erstellen");

    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(createRecipeButton).toBeInTheDocument();
  });

  test("adds an ingredient when 'hinzufügen' button is clicked", () => {
    render(<OpenAICall />);
    const inputElement = screen.getByPlaceholderText("Zutaten hier eingeben");
    const addButton = screen.getByText("hinzufügen");
    const ingredient = "Tomato";

    fireEvent.change(inputElement, { target: { value: ingredient } });
    fireEvent.click(addButton);

    const ingredientElement = screen.getByText(ingredient);
    expect(ingredientElement).toBeInTheDocument();
  });

  test("creates a recipe when 'Rezept erstellen' button is clicked", async () => {
    render(<OpenAICall />);
    const inputElement = screen.getByPlaceholderText("Zutaten hier eingeben");
    const addButton = screen.getByText("hinzufügen");
    const createRecipeButton = screen.getByText("Rezept erstellen");
    const ingredient1 = "Tomato";
    const ingredient2 = "Onion";
    const recipeResult = "Recipe: Tomato and Onion Soup";

    fireEvent.change(inputElement, { target: { value: ingredient1 } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, { target: { value: ingredient2 } });
    fireEvent.click(addButton);
    fireEvent.click(createRecipeButton);

    await waitFor(() => {
      const recipeElement = screen.getByText(recipeResult);
      expect(recipeElement).toBeInTheDocument();
    });
  });

  test("downloads a PDF when download button is clicked", () => {
    render(<OpenAICall />);
    const downloadButton = screen.getByTestId("download-pdf-button");

    fireEvent.click(downloadButton);

    // Add your assertions for PDF download here
  });
});
