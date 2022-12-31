import "./Skills.css"
import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaJs,
    FaNode,
    FaBootstrap
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
const Skills = () => {
    return (
        <section id="skills">
            <div className="heading">
                <h1>ABOUT ME</h1>
                <img src="../images/mine.jpg" alt="my picture"></img>
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
            <div className="skills-icons">
                <FaHtml5 className="icon" title="HTML5" />
                <FaCss3 className="icon" title="CSS3" />
                <FaJs className="icon" title="JavaScript" />
                <FaReact className="icon" title="React.js" />
                <FaBootstrap className="icon" title="BootStrap" />
                <FaNode className="icon" title="Node.js" />
                <DiMongodb className="icon" title="MongoDB" />
            </div>

        </section>
    );
}

export default Skills;