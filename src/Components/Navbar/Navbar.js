import "./Navbar.css"
import { FaBars } from "react-icons/fa"
const Navbar = () => {
    const burgerToggle = () => {
        let linksEl = document.querySelector(".narrowLinks");
        if (linksEl.style.display === "block") {
            linksEl.style.display = "none";
        } else {
            linksEl.style.display = "block";
        }
    };
    return (
        <nav>
            <div className="navWide">
                <div className="wideDiv">
                    <a href="#hero">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact Me</a>
                    <a
                        href="https://drive.google.com/file/d/1g6pR1MCne0mrOrIvm6b7hnM02TmtiD61/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>
            <div className="navNarrow">
                <FaBars className="nav-icon" onClick={burgerToggle} />
                <div className="narrowLinks">
                    <a href="#hero" onClick={burgerToggle}>
                        About Me
                    </a>
                    <a href="#skills" onClick={burgerToggle}>
                        Skills
                    </a>
                    <a href="#projects" onClick={burgerToggle}>
                        Projects
                    </a>
                    <a href="#contact" onClick={burgerToggle}>
                        Contact Me
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1g6pR1MCne0mrOrIvm6b7hnM02TmtiD61/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;