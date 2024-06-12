import Link from "next/link";

function About() {
  return (
    <div className="mt-20">
      <h2 className="text-xl">About Me</h2>
      <div className="space-y-4 mt-4 flex flex-col">
        <p>Hi, I&apos;m Chris 👋</p>
        <p className=" tracking-wide">
          I am full stack developer with a background in Mechanical Engineering
          and experience in the aerospace industry, passionate about creating
          innovative solutions to complex problems and pushing the boundaries of
          what is possible with technology.
        </p>
        <p>
          I&apos;ve always been drawn to technology and my interest in computers led
          me to coding, and I decided to transition into Software Engineering.
          In 2022, I enrolled in the University of Connecticut&apos;s Coding
          Bootcamp.
        </p>
        <p className="tracking-wide">
          The intensive program helped me develop a diverse skill set and deepen
          my passion for coding. Now, as a Full Stack Developer, I&apos;m eager to
          apply my problem-solving skills and attention to detail to make a
          meaningful impact in the software engineering industry. I&apos;m actively
          seeking opportunities to contribute to innovative projects.
        </p>

        <Link href="/resume">
          <span className="underline underline-offset-2 hover:text-blue-300">
            Learn more about me &#8594;
          </span>
        </Link>

        <Link href="/projects">
          <span className="underline underline-offset-2 hover:text-blue-300">
            Checkout some of my work &#8594;
          </span>
        </Link>
      </div>
    </div>
  );
}
export default About;
