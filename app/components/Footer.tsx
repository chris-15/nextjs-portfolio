import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" flex justify-between items-center text-neutral-200 pt-8 sm:pt-0">
      <Link href="/" className="hover:text-neutral-400">
        <h2 className=" tracking-tighter ">&copy; Chris Sarmiento-Salas</h2>
      </Link>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/christopher-sarmiento-salas/"
          target="_blank"
          className="hover:text-blue-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/chris-15"
          target="_blank"
          className="hover:text-neutral-400"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
