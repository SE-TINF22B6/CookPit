import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomLink from "../components/CustomLink/CustomLink";

describe("CustomLink", () => {
  test("renders the link with children", () => {
    render(
      <MemoryRouter>
        <CustomLink to="/path">Link Text</CustomLink>
      </MemoryRouter>
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/path");
  });

  test('adds "active" class when the link is active', () => {
    render(
      <MemoryRouter initialEntries={["/path"]}>
        <CustomLink to="/path">Link Text</CustomLink>
      </MemoryRouter>
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toHaveClass("active");
  });

  test('does not add "active" class when the link is not active', () => {
    render(
      <MemoryRouter initialEntries={["/other"]}>
        <CustomLink to="/path">Link Text</CustomLink>
      </MemoryRouter>
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).not.toHaveClass("active");
  });
});
