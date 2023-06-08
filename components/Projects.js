import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import rentafitImg from "../public/assets/images/rent-a-fit.png";
import allstarImg from '../public/assets/images/AllstarProfiles.png';
import nutritionImg from '../public/assets/images/NutritionHelper.png';
import weatherImg from '../public/assets/images/WeatherDashboard.png';

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
            projectUrl="/rentafit"
          />
          <ProjectItem
            title="All-Star Profiles"
            backgroundImg={allstarImg}
            projectType="MVC"
            projectUrl="/rentafit"
          />
          <ProjectItem
            title="Nutrition Helper"
            backgroundImg={nutritionImg}
            projectType="HTML CSS JS"
            projectUrl="/rentafit"
          />
          <ProjectItem
            title="Weather Dashboard"
            backgroundImg={weatherImg}
            projectType="HTML CSS JS"
            projectUrl="/rentafit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
