import React from "react";
import Image from "next/image";
import profileImage from "../public/assets/images/chris2.jpeg";


const About = () => {
  return (
    <div>
      <div className="w-full md:h-screen p-4 flex items-center">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-4xl text-[#247ba0]">About</h2>
            <p className="py-2 md:text-lg tracking-wide">
              As a seasoned Mechanical Engineer with a deep-rooted passion for
              technology, I am embarking on an exciting career transition into
              the dynamic field of Software Engineering. Following my graduation
              from the University of Connecticut in 2016, I worked in the
              aerospace industry. However, my fascination with computers grew,
              leading me to build gaming computers and eventually sparking a
              strong interest in coding. Recognizing the immense potential for
              growth and fulfillment in this field, I enrolled in the University
              of Connecticut's Coding Bootcamp at the start of 2022.
            </p>
            <p className="md:text-lg tracking-wide">
              Throughout the intensive program, I have cultivated a diverse
              skill set and acquired knowledge of various coding concepts. This
              immersive experience has only deepened my passion for coding and
              solidified my desire to pursue a career as a Full Stack Developer.
              With a meticulous attention to detail, a keen problem-solving
              mindset, and a commitment to delivering exceptional results, I am
              poised to make a meaningful impact in the software engineering
              industry. Having graduated from the bootcamp in June 2022, I am
              now actively seeking opportunities to leverage my skills and
              contribute to innovative projects.
            </p>
            
          </div>
          <div className="w-full h-auto m-auto hidden md:block">
            <Image
              src={profileImage}
              width={300}
              height={300}
              alt="profile picture of me"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
