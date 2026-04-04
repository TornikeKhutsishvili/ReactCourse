import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /register/i })).toBeInTheDocument();
  });

  it("has correct navigation paths", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const registerLink = screen.getByRole("link", { name: /register/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(registerLink).toHaveAttribute("href", "/register");
  });
});