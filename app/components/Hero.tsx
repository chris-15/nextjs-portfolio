import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  const heroItems = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:chris.sarm15@gmail.com",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/christopher-sarmiento-salas/",
    },
    { name: "Github", icon: <FaGithub />, href: "https://github.com/chris-15" },
  ];
  return (
    <section className=" sm:flex items-center ">
      <Image
        src={profileImage}
        alt="Profile picture of Chris."
        width={150}
        className="rounded-full mx-auto"
      ></Image>

      <div className="sm:ml-8 mt-8 ">
        <h1 className="text-2xl ">
          Hi, I&apos;m Chris. I&apos;m a full-stack developer and I love to build things.
        </h1>
        <div className="flex justify-between items-center mt-2 ">
          {heroItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-2 hover:text-neutral-200"
              target="_blank"
            >
              <p>{item.icon}</p>
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Hero;
