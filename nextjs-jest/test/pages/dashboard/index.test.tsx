import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardIndexPages from "../../../pages/dashboard";

describe("Descrive our dashboard Page", () => {
  it("Should render property", () => {
    render(<DashboardIndexPages />);

    const header = screen.getByRole("heading");
    const headerText = "Dashboard";

    expect(header).toHaveTextContent(headerText);
  });

  it("Should have a disabled button", () => {
    render(<DashboardIndexPages />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeDisabled();
  });

  it("Should have a p tag with className text-blue", () => {
    render(<DashboardIndexPages />);

    const pElement = screen.getByTestId("paragraph-blue");
    expect(pElement).toHaveClass("text-blue-900");
    expect(pElement).toHaveTextContent("This is our paragraph");
  });
});
