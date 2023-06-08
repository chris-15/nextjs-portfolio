import Image from "next/image";
import React from "react";
import rentafitImg from "../public/assets/images/rent-a-fit.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-4xl text-[#247ba0]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#0a2463] to-[#247ba0]">
            <Image
              src={rentafitImg}
              className="rounded-xl group-hover:opacity-10"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Rent-a-Fit
              </h3>
              <p className="pb-4 pt-2 text-white text-center">MERN</p>
              <Link href="/"></Link>
              <p className="text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer">
                More Info
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
