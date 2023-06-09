import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";


const AltContact = () => {
  return (
    <div id="contact" className="w-full pt-24 pb-10">
      <div className="max-w-[1240px] m-auto px-4 w-full">
        <h2 className="text-4xl text-[#247ba0] pb-8">Contact Me!</h2>
        <div className="flex justify-center items-center space-x-10">
          <a
            href="https://github.com/chris-15"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithubSquare size={55} className="hover:text-[#247ba0]" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-sarmiento-salas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin size={55} className="hover:text-[#247ba0]" />
          </a>
          <a href="mailto:chris.sarm15@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={55} className="hover:text-[#247ba0]" />
          </a>
          <a href='/assets/documents/resume.pdf' target="_blank" rel="noopener noreferrer" download>
            <FaFileDownload size={55} className="animate-bounce hover:text-[#247ba0]"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AltContact;
