import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import alpha from '../images/UI/alpha.png'
import mover from '../images/UI/mover.png'
import afson from '../images/UI/afson.png'
import holiday from '../images/UI/holiday.png'
import hotel from '../images/UI/hotel.png'
import one from '../images/UI/one.png'
import sevenFolorist from '../images/UI/sevenFolorist.png'
import seoMalesiya from '../images/UI/seoMalesiya.png'
import { projectData } from '../data/localData'
import SingleProject from './SingleProject'
import { FaGlobe } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";
// import { BiSolidShow } from "react-icons/bi";
// import { BiSolidHide } from "react-icons/bi";

const Projects = () => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  // console.log( projectData);


  return (
    <>
      {/* -----------our-porjects----------- */}
      <section className=' py-5  ' >
        <div className="container">
          {/* <h2 className='lg:text-2xl text-xl font-medium mb-5 text-gray-900 text-center'>Our Latest Projects</h2> */}

          <div className="text-center mb-16">
            <div className="inline-block">
              {/* Icon & Lines */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-1 w-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></span>
                <FaGlobe className="text-3xl text-teal-600 dark-theme:text-teal-400" />
                <span className="h-1 w-12 bg-gradient-to-l from-teal-500 to-teal-600 rounded-full"></span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark-theme:text-white mb-2">
                Our&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500 dark-theme:from-teal-400 dark-theme:to-teal-300">
                  Projects
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-gray-600 dark-theme:text-gray-300 text-lg max-w-xl mx-auto">
                Explore a collection of professionally developed projects showcasing skills,
                innovation, and real-world achievements.
              </p>
            </div>
          </div>

          <div className="section-center projects-center">
            {projectData.map(({ id, projectName, projectImage, desc, liveURL, sourceCode, usedTech, features }) => {
              return <SingleProject key={id}
                projectName={projectName}
                projectImage={projectImage}
                desc={desc}
                liveURL={liveURL}
                sourceCode={sourceCode}
                usedTechData={usedTech}
                featuresData={features}

              />
            })
            }
          </div>
          {/* ------show-more-project-section---- */}
          <div className='w-100 grid place-items-center pt-12'>
            <button onClick={handleClick} className='w-56 mx-0 bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-150 transition-all flex items-center py-2 px-3'>
              <ListItemText primary="View More Projects" />
              {/* {!open ? <ExpandLess /> : <ExpandMore />} */}
              {!open ? <ExpandMore /> : <ExpandLess />}
            </button>
            <Collapse in={!open} timeout="auto" unmountOnExit >
              <List component="div" disablePadding >
                <div className='mt-1'>
                  {/* ----------------our-ui porjects------------ */}
                  <div className='container pt-10'>
                    {/* <h3 className='text-center text-white pb-5'></h3> */}
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8'  >
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://reachbhutan.com/' target='_blank'>
                          <img src={hotel} alt="Reach Bhutan Hotel" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://shengfamover.com/' target='_blank'>
                          <img src={mover} alt="Shengfa Mover" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://afsontravels.com/' target='_blank'>
                          <img src={afson} alt="Afson Travels" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://www.onecalangute.com/' target='_blank'>
                          <img src={one} alt="One Calangute" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://hodophileholidays.com/' target='_blank'>
                          <img src={holiday} alt="Hodophile Holidays" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://alphaautomation.org/' target='_blank'>
                          <img src={alpha} alt="Alpha Automation" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://seoinmalaysia.com/' target='_blank'>
                          <img src={seoMalesiya} alt="SEO in Malaysia" loading="lazy" />
                        </a>
                      </div>
                      <div className="ui-porject-card mb-20 ">
                        <a href='https://sevenflorist.com.my/' target='_blank'>
                          <img src={sevenFolorist} alt="Seven Florist" loading="lazy" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </Collapse>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
