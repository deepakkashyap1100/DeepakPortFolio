import React, { useEffect } from 'react'
// import { contactLinks } from '../Components/BasicInfo'

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { IoMdDownload } from "react-icons/io";
import MySkill from './MySkill';
import Hero from './Hero';
import WorkExperience from './WorkExperience';


const Home = () => {
  // const socialIcon = contactLinks
  // console.log(contactLinks);

  // add a function to scroll to top at the start of page loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      {/* <About /> */}
      <MySkill />
      <Projects />
      <WorkExperience />

      <Contact />


    </>
  )
}

export default Home
