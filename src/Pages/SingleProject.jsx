import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const SingleProject = ({ projectName, projectImage, desc, liveURL, sourceCode, usedTechData, featuresData }) => {

  const [isBehind, setISBehind] = useState(false);
  return (
    <>
      <div className="project ">
        <div className="project-img md:mt-0 mt-4 ">
          <a href={liveURL} target='_blank' >
            <img src={projectImage} alt={projectName} loading="lazy" className='rounded-md' />
          </a>
        </div>
        <div className={`project-details ${isBehind ? 'hide' : ''}`}>
          <div className="project-info p-2">
            <div className='flex behind-front-btn'>
              <button className={`rounded-3xl  ${!isBehind ? 'bg-teal-600' : 'bg-gray-400'} py-1 px-2`} onClick={() => setISBehind(!isBehind)}>
                <div className='text-white cursor-pointer items-center flex'>
                  {!isBehind ? <BiSolidHide size={24} className='pe-1' /> : <BiSolidShow className='pe-1' size={24} />}
                  {!isBehind ? 'Hide' : 'View '}
                </div>
              </button>
            </div>
            <h5 className='underline underline-offset-8 pb-2'>{projectName}</h5>
            <p>{desc}</p>
            <p className='pt-3 mb-1 font-semibold '>Tech Stack</p>
            <div className="use-tech flex  gap-2 flex-wrap">
              {usedTechData.map((el, i) => <div key={i}>{el}</div>)}
            </div>
            <p className='pt-3 mb-1 font-semibold'>Features</p>
            <div className=" flex  gap-2 flex-wrap">
              <ul className='list-disc text-gray-700'>
                {featuresData?.map((el, i) => <li key={i}>{el}</li>)}
              </ul>
            </div>
            <div className="sourceLinks flex gap-4 pt-3">
              <div className="py-2"><a href={liveURL} className='flex' target='_blank'>Visit Site<span className='flex items-center ps-1'><FaArrowRight /></span></a></div>
              {/* <div className=" py-2"><a href={sourceCode} className='flex' target='_blank'>Source Code <span className='flex items-center ps-1'><FaArrowRight /></span></a></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleProject
