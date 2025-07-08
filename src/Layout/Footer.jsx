import React from 'react'
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="parent" style={{ backgroundColor: 'rgb(0, 163, 152)' }} >
          {/* animation-style */}

        <div className="wave-head">
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.5"></use>
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3"></use>
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.1"></use>
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
              </g>
            </svg>
          </div>


        </div>

        <div className="container pt-4 ">
          <div className="grid lg:grid-cols-3 grid-col-1 ">
            <div className="lg:col-span-2  text-white p-4">
              <h3>Social Links</h3>

              <div className='social-icons mt-4'>
                <a href="https://www.linkedin.com/in/deepak-kashyap-059225234/" target="_blank"><FaLinkedinIn className='text-teal-700' size={20} /></a>
                <a href="mailto:deepakkashyap1100@gmail.com"><IoMdMailUnread className='text-teal-700' size={25} /></a>
                <a href="https://github.com/deepakgitoffical"><FaGithub className='text-teal-700' size={20} /></a>
              </div>
            </div>
            <div className=" text-white p-4">
              <h3>Contact Details</h3>
              <p>City: New Delhi, India</p>
              <p>Contact No: 81716 54421</p>
              <p className="text-gray-300">Email: <a href="mailto:deepakkashyap1100@gmail.com" className="text-white">deepakkashyap1100@gmail.com</a></p> 
            </div> 
          </div>
        </div>
      <hr className="text-white"/>
      <div className="container p-2">
          <p className="text-center text-white text-sm"> © 2025 made by: <a href="" className='text-yellow-400'>Deepak Kashyap</a></p>
      </div>
      </section>
    </>
  )
}

export default Footer