import Image, { StaticImageData } from "next/image"
import journeyImg from "../public/images/journey.png"
import weatherDashboardImg from "../public/images/WeatherDashboard.png"
import rentAFitImg from "../public/images/rent-a-fit.png"
import codDashboardImg from "../public/images/cod-dashboard.png"
import { FaGithub, FaLink } from "react-icons/fa"


type TProjectItemProps= {
    title: string,
    description: string,
    backgroundImg: StaticImageData
    projectUrl: string,
    githubUrl: string
}

function ProjectItem({ description, backgroundImg, projectUrl, githubUrl}: TProjectItemProps) {
    return (
        <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-[#1b1c1c] to-[#323036] ">
        <Image
          src={backgroundImg}
          className="rounded-xl group-hover:opacity-10"
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <div className="flex flex-col items-center">
            {/* <h3 className="text-2xl text-white tracking-wider">{title}</h3> */}
            <p className="pb-4 pt-2 text-white text-center text-sm sm:text-base">{description}</p>
            <div className="flex space-x-4 text-black">
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <FaLink size={50} className="bg-white rounded-lg p-3 transition-all duration-300 hover:bg-neutral-400" />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} className="bg-white rounded-lg p-3 transition-all duration-300 hover:bg-neutral-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

    )
}

function Projects() {

    const projectsList =[
        {
            title: "Cod Dashboard",
            description: "A Next.js dashboard application where users can record and analyze their Call of Duty Ranked match statisitcs.",
            backgroundImg: codDashboardImg,
            projectUrl: "https://cod-dashboard.vercel.app/",
            githubUrl: "https://github.com/chris-15/cod-stats-dashboard"
        },
        {
            title: "RentAFit",
            description: "MERN stack application where users can post clothing items to rent or search items to rent.",
            backgroundImg: rentAFitImg,
            projectUrl: "https://rentafit.up.railway.app/",
            githubUrl: "https://github.com/chris-15/Rent-A-Fit"
           
        },
        {
            title: "Journey",
            description: "MERN stack application where users can post about their cancer treatment journeys.",
            backgroundImg: journeyImg,
            projectUrl: "https://journey.up.railway.app/",
            githubUrl: "https://github.com/chris-15/Journey"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard web application where users can search for the weather information of their favorite city.",
            backgroundImg: weatherDashboardImg,
            projectUrl: "https://chris-15.github.io/Weather-Dashboard/",
            githubUrl: "https://github.com/chris-15/Weather-Dashboard"
        },
      

    ] 
   
  return (
  <>

  {projectsList.map((project) => (
    <div key={project.title} className="mb-4">
        <h2 className="text-2xl text-center tracking-tight">
            {project.title}
        </h2>
        <ProjectItem  {...project} />
    </div>
  ))}
  </>

  )
}
export default Projects


