import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css"
import Particles from "reactparticles.js";
const Hero = () => {
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
                <Particles
                    className="particle"
                    id="config"
                    config="config.json"
                // style={{
                //     position: "absolute",
                //     height: "70vh",
                //     width: "100vw",
                //     zIndex: "500",
                //     backgroundColor: "#222222",
                //     opacity: "0.7"
                // }}
                />
                <div className="hero-container">
                    <div className="text-title">
                        <h1>Dep Joti Ghosh</h1>
                        <p>
                            I'm a Full Stack Developer. Who enjoys to play and testing with
                            web related tools.
                        </p>
                    </div>


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
        </section>);
}

export default Hero;