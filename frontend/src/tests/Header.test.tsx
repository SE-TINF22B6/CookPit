import React from "react";
import { describe, expect, test } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header/Header";

test("renders the header of the website", () => {
  render(<Header />);
  const WebsiteName = screen.getByText("CookPit");
  expect(WebsiteName).toBeInTheDocument();
});
