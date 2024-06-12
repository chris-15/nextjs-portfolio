import Image from "next/image";
import profileImage from "../../public/images/profile.png";

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
          <h2 className="text-lg">Experience</h2>
          <ul className=" text-neutral-400 flex flex-col space-y-1">
            <li>Configuration Management Analyst at Cyient (2017 - Present)</li>
            <li>Associate Universal Banker at Webster Bank (2016 - 2017)</li>
          </ul>
        </div>

        <hr />

        <div>
          <h2 className="text-lg">Education</h2>
          <ul className="text-neutral-400 flex flex-col space-y-1">
            <li>
              B.S. in Mechanical Enginnering, University of
              Connecticut (2016)
            </li>
            <li>
              Full Stack Development Certificate, University of Connecticut
              (2022)
            </li>
          </ul>
        </div>

        <hr />
        
        <div>
          <h2 className="text-lg">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 gap-2 text-neutral-400">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <hr />

        <div>
          <h2 className="text-lg">Contact Information</h2>
          <ul className="text-neutral-400">
            <li>Email: chris.sarm15@gmail.com</li>
            <li>
              Linkedin: https://www.linkedin.com/in/christopher-sarmiento-salas/{" "}
            </li>
            <li>Github: https://github.com/chris-15</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Resume;
