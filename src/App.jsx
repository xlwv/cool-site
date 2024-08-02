import React, { useEffect } from 'react';
import NavBar from './components/navbar';
import LP from './components/lp';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Project from './components/project';
import Cards from './components/cards';
import Ready from './components/ready';
import Footer from './components/footer';

import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const scroll = new LocomotiveScroll();
 

  return (
    <div className=' app w-full min-h-screen bg-[#F1F1F1]'>
      <NavBar/>
      <LP/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Project/>
      <Cards/>
      <Ready/>
      <Footer/>
    </div>
  );
}

export default App;
