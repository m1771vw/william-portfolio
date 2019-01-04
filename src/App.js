import React, { Component } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
// import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <section className="hero is-link is-fullheight-with-navbar">
        <Header /> 
        <HeroSection />
      </section>
        <AboutMe/>
        <WhatIDo/>
        <Projects/>
        <Blogs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
