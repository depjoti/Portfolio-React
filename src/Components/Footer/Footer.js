import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div id="footer">
            <p className="text-title">Dep Joti Ghosh &copy; 2023</p>
            <div className="code-link">
                <a
                    href="https://github.com/depjoti/Portfolio-React"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    &nbsp; Code
                </a>
            </div>
        </div>
    );
}

export default Footer;
