import { render, fireEvent } from "@testing-library/react";
import TemporaryDrawer from "../components/Drawer/Drawer";

describe("TemporaryDrawer", () => {
  it("renders without crashing", () => {
    render(<TemporaryDrawer />);
  });

  it("opens the drawer when the button is clicked", () => {
    const { getByRole } = render(<TemporaryDrawer />);
    const button = getByRole("button");
    fireEvent.click(button);

    const drawer = getByRole("presentation");
    expect(drawer).toBeVisible();
  });

  it("closes the drawer when a list item is clicked", () => {
    const { getByRole, getAllByRole } = render(<TemporaryDrawer />);
    const button = getByRole("button");
    fireEvent.click(button);

    const drawer = getByRole("presentation");
    expect(drawer).toBeVisible();

    const listItem = getAllByRole("listitem")[0];
    fireEvent.click(listItem);

    expect(drawer).not.toBeVisible();
  });
});
