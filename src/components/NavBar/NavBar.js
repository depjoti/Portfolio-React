import React, { Component } from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";

class NavBar extends Component {
  burgerToggle = () => {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };
  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#hero">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
            <a
              href="https://drive.google.com/file/d/1brprWy-xBor0LeFecD2f-nbbM4JIYfo9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="navNarrow">
          <FaBars className="nav-icon" onClick={this.burgerToggle} />
          <div className="narrowLinks">
            <a href="#hero" onClick={this.burgerToggle}>
              About Me
            </a>
            <a href="#skills" onClick={this.burgerToggle}>
              Skills
            </a>
            <a href="#projects" onClick={this.burgerToggle}>
              Projects
            </a>
            <a href="#contact" onClick={this.burgerToggle}>
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1brprWy-xBor0LeFecD2f-nbbM4JIYfo9/view?usp=sharing"
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
}
export default NavBar;
