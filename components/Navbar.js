import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  SlMenu,
  SlClose,
  SlSocialGithub,
  SlSocialLinkedin,
  SlDoc,
} from "react-icons/sl";

const Navbar = () => {
  // using useState to capture the state of the sidebar/navbar
  const [sideBar, setSideBar] = useState(false);

  // using useState to capture the state of the shadow in the navbar
  const [shadow, setShadow] = useState(false);

  const handleNavbar = () => setSideBar(!sideBar);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 z-[100] shadow-xl bg-white"
          : "fixed w-full h-20 z-[100] bg-white  "
      }
    >
      {/* navbar header */}
      <div className="flex justify-between items-center w-full h-full px-2">
        <div>
          <Link href="/">
            <h1 className="sm:hidden text-3xl text-[#247ba0] italic">CSS</h1>
            <h1 className="hidden sm:block text-3xl text-[#247ba0] ">
              Chris Sarmiento-Salas
            </h1>
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:underline">Home</li>
            </Link>

            <Link href="/#about">
              <li className="ml-10 text-lg uppercase hover:underline">About</li>
            </Link>

            <Link href="/#projects">
              <li className="ml-10 text-lg uppercase hover:underline">Work</li>
            </Link>

            <Link href="/#contact">
              <li className="ml-10 text-lg uppercase hover:underline">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNavbar} className="md:hidden cursor-pointer">
            <SlMenu size={25} />
          </div>
        </div>
      </div>

      {/* hamburger menu */}
      <div
        className={
          sideBar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/75"
            : ""
        }
      >
        <div
          className={
            sideBar
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-6 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-300"
          }
        >
          {/* hamburger menu header */}
          <div>
            <div className="flex justify-between items-center w-full">
              <h1 className="text-3xl text-[#247ba0] italic">CSS</h1>
              <div onClick={handleNavbar} className="cursor-pointer">
                <SlClose size={25} />
              </div>
            </div>
          </div>

          {/* hamburger menu list */}
          <ul className="py-10 flex flex-col">
            <Link href="/">
              <li onClick={() => setSideBar(false)} className="py-4 text-lg uppercase hover:underline">Home</li>
            </Link>

            <Link href="/#about">
              <li onClick={() => setSideBar(false)} className=" py-4 text-lg uppercase hover:underline">About</li>
            </Link>

            <Link href="/#projects">
              <li onClick={() => setSideBar(false)} className="py-4 text-lg uppercase hover:underline">Work</li>
            </Link>

            <Link href="/#contact">
              <li onClick={() => setSideBar(false)} className="py-4 text-lg uppercase hover:underline">
                Contact
              </li>
            </Link>
          </ul>

          {/* hamburger menu footer */}
          {/* need to add links and a tag properties  */}

          <div className="flex justify-between items-center w-full sm:w-[80%]">
            <a className="">
              <SlSocialGithub size={35} />
            </a>
            <a className="">
              <SlSocialLinkedin size={35} />
            </a>
            <a className=" cursor-pointer animate-bounce">
              <SlDoc size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
