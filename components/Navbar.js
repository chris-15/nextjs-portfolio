import Link from "next/link";
import React, { useState } from "react";
import { SlMenu, SlClose, SlSocialGithub, SlSocialLinkedin, SlDoc } from "react-icons/sl";

const Navbar = () => {

    // need to create useState and handle functions to display hamburger menu when clicked
  return (
    <div className="fixed w-full h-20 z-[100]">
        {/* navbar header */}
      <div className="flex justify-between items-center w-full h-full px-2">
        <div>
          <h1 className="sm:hidden">CSS</h1>
          <h1 className="hidden sm:block">Chris Sarmiento-Salas</h1>
        </div>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">Home</li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">About</li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">Work</li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:underline">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <SlMenu size={25} />
          </div>
        </div>
      </div>

      {/* hamburger menu */}
      <div className="fixed left-0 top-0 w-full h-screen bg-black/75">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#E2E2E2] p-6 ease-in duration-300">
            {/* hamburger menu header */}
          <div>
            <div className="flex justify-between items-center w-full">
              <h1 className="sm:hidden">CSS</h1>
              <h1 className="hidden sm:block">Chris Sarmiento-Salas</h1>
              <div className="cursor-pointer">
                <SlClose size={25} />
              </div>
            </div>
          </div>

          {/* hamburger menu list */}
            <ul className="py-10 flex flex-col">
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:underline">Home</li>
              </Link>

              <Link href="/">
                <li className=" py-4 text-sm uppercase hover:underline">
                  About
                </li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm uppercase hover:underline">Work</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm uppercase hover:underline">
                  Contact
                </li>
              </Link>
            </ul>

            {/* hamburger menu footer */}
            {/* need to add links and a tag properties  */}

            <div className="flex justify-between items-center w-full sm:w-[80%]">
                <a className=""><SlSocialGithub size={25}/></a>
                <a className=""><SlSocialLinkedin size={25} /></a>
                <a className=" cursor-pointer animate-bounce"><SlDoc size={25} /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
