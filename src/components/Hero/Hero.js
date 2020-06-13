import React, { Component } from "react";
// import Typed from 'react-typed';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
import Particles from "react-particles-js";

class Hero extends Component {
  render() {
    const params = {
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#000",
            blur: 1,
          },
        },
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    };

    return (
      <section id="hero">
        <div className="hero">
          <Particles params={params} className="particle" />
          <div className="hero-container">
            <div className="text-title">
              <h1>I am Dep Joti Ghosh</h1>
              <p>
                I'm a Full Stack Front-End Focused Developer. Who enjoy to build
                and testing web related tools
              </p>
            </div>
            {/* <Typed
              className="typed"
              strings={strings}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed> */}

            <div className="social-icons">
              <a
                href="https://github.com/depjoti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dep-joti-ghosh-563a8810a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
