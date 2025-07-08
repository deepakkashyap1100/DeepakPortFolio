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
        <section className=' py-5  bg-gray-100' >
          <div className="container">
            <h2 className='lg:text-2xl text-xl font-medium mb-5 text-gray-900 text-center'>Our Latest Projects</h2>
            <div className="section-center projects-center">
              {/* <div className="project grid  justify-items-center">
                <div className="project-img ">
                  <img src={cartImg} alt="project image" />
                </div>
                <div className={`project-details ${isBehind ? 'hide' : ''}`}>
                  <div className='flex  behind-front-btn'>
                    <button className='rounded-3xl bg-gray-400 py-1 px-2' onClick={() => setISBehind(!isBehind)}>
                      <div className='text-white cursor-pointer items-center flex'>
                        {!isBehind ? <BiSolidHide size={24} className='pe-1' /> : <BiSolidShow className='pe-1' size={24} />}
                        {!isBehind ? 'Behind' : 'Front'}
                      </div>
                    </button>
                  </div>

                  <div className="project-info p-2">
                    <h5 className='underline underline-offset-8 text-gray-700 pb-3'>Online Shooping site</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, libero. Exercitationem suscipit architecto, enim, ducimus repellendus excepturi iure commodi aperiam magnam accusantium dolorem cupiditate! Earum facere dolor ex expedita exercitationem aut temporibus optio asperiores inventore suscipit repudiandae quas corporis distinctio, ratione cupiditate. Corporis earum, tempora excepturi fuga ex suscipit sapiente sint dolorem alias exercitationem nostrum, laborum, ducimus illum temporibus cumque!</p>
                    <div className="use-tech flex  gap-2 flex-wrap">
                      <div>React Js</div>
                      <div>Tailwind</div>
                      <div>Redux</div>
                      <div>Node Js</div>
                      <div>Express Js</div>
                      <div>Mongo DB</div>
                    </div>
                    <div className="sourceLinks flex gap-4 pt-3">
                      <div className="py-2"><a href="disabled" className='flex '>Site URL <span className='flex items-center ps-1'><FaArrowRight /></span></a></div>
                      <div className=" py-2"><a href="https://github.com/deepakgitoffical/EcommerceSite.git" target='_blank' className='flex '>Source Code <span className='flex items-center ps-1'><FaArrowRight /></span> </a></div> 
                    </div>
                  </div> 
                </div>
              </div> */}

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
                <ListItemText primary="Show More UI Project" />
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
                                 <img src={hotel} alt="alpha automation"  />
                                </a>
                              </div> 
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://shengfamover.com/' target='_blank'>
                                 <img src={mover} alt="alpha automation"  />
                                </a>
                              </div>
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://afsontravels.com/' target='_blank'>
                                 <img src={afson} alt="alpha automation"  />
                                </a>
                              </div>
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://www.onecalangute.com/' target='_blank'>
                                 <img src={one} alt="alpha automation"  />
                                </a>
                              </div> 
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://hodophileholidays.com/' target='_blank'>
                                 <img src={holiday} alt="alpha automation"  />
                                </a>
                              </div>
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://alphaautomation.org/' target='_blank'>
                                 <img src={alpha} alt="alpha automation"  />
                                </a>
                              </div>
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://seoinmalaysia.com/' target='_blank'>
                                 <img src={seoMalesiya} alt="alpha automation"  />
                                </a>
                              </div>
                              <div className="ui-porject-card mb-20 ">
                                <a href='https://sevenflorist.com.my/' target='_blank'>
                                 <img src={sevenFolorist} alt="alpha automation"  />
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