import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Skills from "../components/Skills";




export default function Home() {
  return (
   <div>
    <Head>
      <title>Chris Sarmiento</title>
      <meta name="descritption" content="Page title"/>
    </Head>

    <Navbar />
    <HomePage />
    <About />
   


   </div>
  )
}
