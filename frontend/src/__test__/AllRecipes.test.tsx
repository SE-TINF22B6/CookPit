import { render, screen } from "@testing-library/react";
import AllRecipes from "../components/AllRecipes/AllRecipes";

const mockRecipes = [
  {
    id_recipe: 1,
    id_author: 1,
    picture: "base64image1",
    name: "Recipe 1",
    rating: 4.5,
    time: 30,
    description: "Recipe 1 description",
    creation_date: "2022-01-01",
    ingredients: ["Ingredient 1", "Ingredient 2"],
    steps: ["Step 1", "Step 2"],
  },
  {
    id_recipe: 2,
    id_author: 2,
    picture: "base64image2",
    name: "Recipe 2",
    rating: 3.8,
    time: 45,
    description: "Recipe 2 description",
    creation_date: "2022-01-02",
    ingredients: ["Ingredient 3", "Ingredient 4"],
    steps: ["Step 1", "Step 2", "Step 3"],
  },
];

describe("AllRecipes", () => {
  test("renders all recipes", () => {
    render(<AllRecipes allRecipes={mockRecipes} />);

    const recipeElements = screen.getAllByTestId("display-recipe");
    expect(recipeElements).toHaveLength(mockRecipes.length);

    mockRecipes.forEach((recipe, index) => {
      const recipeElement = recipeElements[index];
      expect(recipeElement).toBeInTheDocument();
      expect(recipeElement).toHaveAttribute(
        "src",
        `data:image/jpeg;base64,${recipe.picture}`
      );
      expect(screen.getByText(recipe.name)).toBeInTheDocument();
      expect(screen.getByText(`Rating: ${recipe.rating}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Time: ${recipe.time} minutes`)
      ).toBeInTheDocument();
      expect(screen.getByText(recipe.description)).toBeInTheDocument();
      expect(
        screen.getByText(`Created on: ${recipe.creation_date}`)
      ).toBeInTheDocument();
      recipe.ingredients.forEach((ingredient) => {
        expect(screen.getByText(ingredient)).toBeInTheDocument();
      });
      recipe.steps.forEach((step) => {
        expect(screen.getByText(step)).toBeInTheDocument();
      });
    });
  });
});
