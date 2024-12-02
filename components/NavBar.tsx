"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  FaHome,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

function NavBar() {
  const navItems = [
    {
      name: "Github",
      icon: (
        <FaGithub
          title="Github"
          className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
        />
      ),
      href: "https://github.com/chris-15",
    },
    {
      name: "Linkedin",
      icon: (
        <FaLinkedin
          title="Linkedin"
          className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
        />
      ),
      href: "https://www.linkedin.com/in/christopher-sarmiento-salas/",
    },
    {
      name: "Resume",
      icon: (
        <FaFileAlt
          title="Resume"
          className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
        />
      ),
      href: "/#resume",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 mx-auto max-w-7xl flex items-center justify-between p-5 pt-8 bg-gray-950  ">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <Link href={"/#home"}>
          <FaHome className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300" />
        </Link>
        {navItems.map((item, index) => (
          <a key={index} href={item.href}>
            {item.icon}
          </a>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <a
          href="mailto:chris.sarm15@gmail.com"
          className="group flex cursor-pointer items-center"
        >
          <FaEnvelope
            title="Contact Me"
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors group-hover:fill-gray-300"
          />
          <span className="hidden text-sm uppercase text-gray-400  group-hover:text-gray-300 md:inline-flex">Contact</span>
        </a>
      </motion.div>
    </nav>
  );
}
export default NavBar;
