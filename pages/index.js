import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";




export default function Home() {
  return (
   <div>
    <Head>
      <title>Chris Sarmiento</title>
      <meta name="descritption" content="Page title"/>
      <link href="https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap" rel="stylesheet"/>
    </Head>

    <Navbar />
    <HomePage />
   

   </div>
  )
}
