import React from "react";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTailwindcss,
  SiGraphql,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full md:h-screen p-4 flex items-center">
      <h2>My skills include but not limited to:</h2>
      <ul>
        <li>
          HTML <SiHtml5 size={35} />
        </li>
        <li>
          CSS <SiCss3 size={35} />
        </li>
        <li>
          JavaScript
          <SiJavascript size={35} />
        </li>
        <li>
          React
          <SiReact size={35} />
        </li>
        <li>
          Node.js
          <SiNodedotjs size={35} />
        </li>
        <li>
          Tailwind
          <SiTailwindcss size={35} />
        </li>
        <li>
          GraphQL <SiGraphql size={35} />
        </li>
        <li>
          MySql <SiMysql size={35} />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
