"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto mt-[92px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-white relative mx-auto min-h-screen max-w-full flex flex-col items-center overflow-hidden py-24 px-4 md:px-10 "
      >
        <h2 className="text-2xl uppercase tracking-[10px] text-gray-400 pb-4">
          About
        </h2>
        <div className="space-y-10 flex flex-col">
          <p>Hi, I&apos;m Chris 👋</p>
          <p className="tracking-wider">
            I am a software engineer with a background in Mechanical
            Engineering and experience in the aerospace industry, passionate
            about creating innovative solutions to complex problems and pushing
            the boundaries of what is possible with technology.
          </p>
          <p className="tracking-wider">
            I&apos;ve always been drawn to technology and my interest in
            computers led me to coding, and I decided to transition into
            Software Engineering. In 2022, I enrolled in the University of
            Connecticut&apos;s Coding Bootcamp.
          </p>
          <p className="tracking-wider">
            The intensive program helped me develop a diverse skill set and
            deepen my passion for coding. Now, as a software engineer,
            I&apos;m eager to apply my problem-solving skills and attention to
            detail to make a meaningful impact in the software engineering
            industry. I&apos;m actively seeking opportunities to contribute to
            innovative projects.
          </p>

          <Link href="/#resume">
            <span className="underline underline-offset-2  hover:text-gray-300">
              Learn more about me &#8594;
            </span>
          </Link>

          <Link href="/#projects">
            <span className="underline underline-offset-2 hover:text-gray-300">
              Checkout some of my work &#8594;
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
export default About;
