"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Resume />
    </>
  );
}
