import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;