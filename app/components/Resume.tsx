import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Resume() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
  ];

  const contactItems = [
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
    <section className="">
      {/* image, name, job title, download button */}
      <div className="flex flex-col items-center">
        <Image
          src={profileImage}
          alt="Profile picture of Chris."
          width={150}
          className="rounded-full mx-auto"
        ></Image>
        <h1 className="text-3xl tracking-tighter mt-8 ">
          Christopher Sarmiento-Salas
        </h1>
        <p className="text-neutral-400">Full Stack Developer</p>
        <a
          href="/documents/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-4 bg-white text-black py-2 px-4 rounded hover:underline hover:bg-neutral-200 cursor-pointer"
        >
          Download Resume
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="">
          <h2 className="text-lg font-semibold">Experience</h2>
          <ul className=" text-neutral-400 flex flex-col space-y-1">
            <li className="flex space-x-4">
              <span className="font-bold text-xl">&#x2022;</span>
              <p>Configuration Management Analyst at Cyient (2017 - Present)</p>
            </li>
            <li className="flex space-x-4">
              <span className="font-bold text-xl">&#x2022;</span>
              <p>Associate Universal Banker at Webster Bank (2016 - 2017)</p>
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <h2 className="text-lg font-semibold">Education</h2>
          <ul className="text-neutral-400 flex flex-col space-y-1">
            <li className="flex space-x-4">
              <span className="font-bold text-xl">&#x2022;</span>
              <p>
                B.S. in Mechanical Enginnering, University of Connecticut (2016)
              </p>
            </li>
            <li className="flex space-x-4">
              <span className="font-bold text-xl">&#x2022;</span>
              <p>
                Full Stack Development Certificate, University of Connecticut
                (2022)
              </p>
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <h2 className="text-lg font-semibold">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 gap-2 text-neutral-400">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <hr />

        <div>
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <ul className=" hidden sm:block text-neutral-400 space-y-2">
            {contactItems.map((item, index) => (
              <li className="flex space-x-1">
                <p>{item.name}:</p>
                <a
                  key={index}
                  href={item.href}
                  className="font-thin hover:underline hover:text-blue-200 cursor-pointer"
                  target="_blank"
                >
                  <p>
                    {item.href === "mailto:chris.sarm15@gmail.com"
                      ? "chris.sarm15@gmail.com"
                      : item.href}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex sm:hidden justify-between items-center mt-2 ">
            {contactItems.map((item, index) => (
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
      </div>
    </section>
  );
}
export default Resume;
