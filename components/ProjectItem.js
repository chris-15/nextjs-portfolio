import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ProjectItem = ( { title, backgroundImg, projectType, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#0a2463] to-[#247ba0]">
            <Image
              src={backgroundImg}
              className="rounded-xl group-hover:opacity-10"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                {title}
              </h3>
              <p className="pb-4 pt-2 text-white text-center">{projectType}</p>
              <Link href={projectUrl}></Link>
              <p className="text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer">
                More Info
              </p>
            </div>
          </div>
  )
}

export default ProjectItem