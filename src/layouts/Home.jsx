import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';
import Projects from './Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;