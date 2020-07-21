import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr";

const Skills = () => {
  return (
    <section id="skills">
      <div className="heading">
        <h1>ABOUT ME</h1>

        <img src="../images/mine.jpg" alt="Dep joti Ghosh"></img>

        <p data-aos="zoom-in">
          I hold a B.Sc degree in Computer Science & Engineering from BAIUST,
          Cumilla Cantonment. I'm a Full Stack focused Frontend Engineer with an
          avid interest in Data Structures, Algorithms and Optimization. As a
          core programmer, I love taking challenges and love being part of the
          solution.
        </p>
      </div>

      <div className="heading">
        <h1>MY SKILLS</h1>
      </div>
      <div className="skills-icons" data-aos="fade-down">
        <FaHtml5 className="icon" title="HTML5"></FaHtml5>
        <FaCss3 className="icon" title="CSS3" />
        <FaSass className="icon" title="SASS" />
        <FaBootstrap className="icon" title="BootStrap" />
        <FaJs className="icon" title="JavaScript" />
        <FaReact className="icon" title="React.js" />
        <GrGatsbyjs className="icon" title="Gatsby.js" />
        <GrGraphQl className="icon" title="GraphQL" />
        <FaNode className="icon" title="Node.js" />
        <DiMongodb className="icon" title="MongoDB" />
      </div>
    </section>
  );
};

export default Skills;
