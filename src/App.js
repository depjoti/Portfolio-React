
import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

import projects from './Data/projectsData';

// Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1000,
      delay: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
