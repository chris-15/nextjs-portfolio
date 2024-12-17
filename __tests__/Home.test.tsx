import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Home from "@/app/page";
import Link from "next/link";
import React from "react";
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});

describe("Hero", () => {
  it("renders without crashing ", () => {
    render(<Hero />);
  });

  it("renders an h2 heading with the correct text", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading.textContent).toBe("Software Engineer");

    expect(heading).toBeInTheDocument();
  });

  it("renders an h1 heading with the correct text", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.textContent).toBe("Chris Sarmiento-Salas");

    expect(heading).toBeInTheDocument();
  });

  it("contatins a 3 links to the correct urls", () => {
    render(<Hero />);

    const link = screen.getByRole("link", { name: "about" });
    const link2 = screen.getByRole("link", { name: "projects" });
    const link3 = screen.getByRole("link", { name: "resume" });

    expect(link).toHaveAttribute("href", "#about");
    expect(link2).toHaveAttribute("href", "#projects");
    expect(link3).toHaveAttribute("href", "#resume");
  });
});

describe("About", () => {
  it("renders without crashing ", () => {
    render(<About />);
  });
});
