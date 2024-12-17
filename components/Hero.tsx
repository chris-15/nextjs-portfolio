import Image from "next/image";
import profileImage from "../public/images/profile.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  const heroItems = ["about", "projects", "resume"];
  return (
    <section className=" text-white -mt-[92px]" id="hero">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-screen justify-center items-center space-y-8 overflow-hidden text-center"
      >
        <Image
          src={profileImage}
          alt="Profile picture of Chris."
          width={144}
          height={144}
          className="rounded-full mx-auto h-36 w-36"
        />
        <div className="">
          <h2 className="pb-2 text-sm uppercase tracking-[10px] text-gray-400 animate-pulse-subtle">
            Software Engineer
          </h2>
          <h1 className="px-10 text-3xl font-semibold md:text-4xl lg:text-6xl">
            Chris Sarmiento-Salas
          </h1>
          <div className="pt-5">
            {heroItems.map((item) => (
              <Link
                href={`#${item}`}
                key={item}
                className="px-6 py-2 text-sm uppercase tracking-widest text-gray-400 transition-all hover:underline hover:text-gray-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
