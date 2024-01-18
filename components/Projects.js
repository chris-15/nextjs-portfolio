import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import rentafitImg from "../public/assets/images/rent-a-fit.png";
import journeyImg from '../public/assets/images/journey.png';
import weatherImg from '../public/assets/images/weatherDashboard.png';
import codDashboardImg from '../public/assets/images/codDashboard.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full px-4 py-24">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl text-[#247ba0] pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="RentAFit"
            backgroundImg={rentafitImg}
            projectType="MERN"
            projectUrl="https://rentafit.up.railway.app/"
            projectGithub='https://github.com/chris-15/Rent-A-Fit'
          />
          <ProjectItem
            title="Journey"
            backgroundImg={journeyImg}
            projectType="MERN"
            projectUrl="https://journey.up.railway.app/"
            projectGithub='https://github.com/chris-15/Journey'
          />
          <ProjectItem
            title="Weather Dashboard"
            backgroundImg={weatherImg}
            projectType="HTML CSS JS"
            projectUrl="https://chris-15.github.io/Weather-Dashboard/"
            projectGithub='https://github.com/chris-15/Weather-Dashboard'
          />
          <ProjectItem
            title="Cod Dashboard"
            backgroundImg={codDashboardImg}
            projectType="Next.js TS Prisma MongoDB"
            projectUrl="https://cod-dashboard.vercel.app/"
            projectGithub='https://github.com/chris-15/cod-stats-dashboard'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
