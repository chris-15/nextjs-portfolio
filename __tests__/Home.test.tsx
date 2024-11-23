import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the Hero component", () => {
    render(<Hero />);
  });

  it("renders the About component", () => {
    render(<About />);
  });
});

describe("Hero", () => {
  it("renders a heading ", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders a link to email ", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toBeInTheDocument();
  });
  it("renders a link to linkedin ", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "Linkedin" });
    expect(link).toBeInTheDocument();
  });

  it("renders a link to github ", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "Github" });
    expect(link).toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders a heading ", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("renders a link to resume page", () => {
    render(<About />);
    const link = screen.getByRole("link", { name: "Learn more about me →" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/resume");
  });

  it("renders a link to projects page", () => {
    render(<About />);
    const link = screen.getByRole("link", { name: "Checkout some of my work →" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects");
  });
});
