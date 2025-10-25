import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-[720px] lg:w-[1120px] mx-auto">
        <Hero></Hero>
      <section id="about"  >
        <About></About>
      </section>
      <section id="education">
        <Education></Education>
      </section>
      <section id="skills" >
        <Skills></Skills>    
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
