import React from 'react'
// import { contactLinks } from '../Components/BasicInfo'

import About from './About';
import Projects from './Projects';
// import Contact from './Contact';
import { IoMdDownload } from "react-icons/io";
import MySkill from './MySkill';
import Hero from './Hero';



const Home = () => {
  // const socialIcon = contactLinks
  // console.log(contactLinks);
  return (
    <>
      <Hero/>
      <About />
      <MySkill/>
      <Projects />
     
      {/* <Contact /> */}
      

    </>
  )
}

export default Home