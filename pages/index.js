import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import AltContact from "../components/AltContact";




export default function Home() {
  return (
   <div>
    <Head>
      <title>Chris Sarmiento-Salas</title>
      <meta name="descritption" content="Page title"/>
    </Head>

    <Navbar />
    <HomePage />
    <About />
    <Projects />
    <AltContact />


   </div>
  )
}
