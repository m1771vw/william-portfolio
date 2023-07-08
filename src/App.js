import React, { Component } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';
import background from './img/garibaldi_lake_wallpaper.jpg';
// import background from './img/garibaldi-lake-2560.jpg';


class App extends Component {
  render() {
    return (
      <div>
      <section style={{"backgroundImage": `url(${background})`}} className="hero is-link is-fullheight-with-navbar hero-background">
        <Header /> 
        <HeroSection />
        
      </section>
        <AboutMe/> 
        
        <WhatIDo/>
        <Projects/>
        <Blogs/>
        <ContactMe/>
        <Footer/>

      </div>
    );
  }
}

export default App;
