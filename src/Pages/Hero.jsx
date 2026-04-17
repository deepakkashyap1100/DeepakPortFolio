import React from 'react'
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import devloper from "../images/hero.jpg";
import profile from "../images/dp.jpg";
import cv from "../images/cv.pdf";
import { IoMdDownload } from "react-icons/io";
const Hero = () => {
  return (
    <section className='hero '>
      <div className='container  pt-5'>
        <div className="flex md:flex-row flex-col gap-4">
          <div className='md:w-4/5 w-full'>
            <p className="text-lg text-gray-600 font-medium">Hi, I am</p>
            <h1 className="lg:text-5xl text-4xl font-bold text-teal-500">Deepak Kashyap</h1>
            <h2 className="lg:text-4xl text-3xl font-medium text-gray-600">UI/Frontend Developer</h2>
            <p className=" text-lg text-gray-600 pt-4">I am a skilled UI Developer proficient in <b> JavaScript, React Js, HTML/CSS, Bootstrap, PHP, MySQL and AJAX Query</b>. With a keen eye for detail and a passion for crafting seamless user experiences, I specialize in utilizing Tailwind CSS to create visually stunning and responsive web applications. My goal is to deliver high-quality solutions that not only meet client needs but also elevate their online presence and drive growth.</p>


          </div>
          <div className='  md:w-1/5 w-full'>
            <div className="dp-imgae md:ms-auto ">
              <img src={profile} alt="" />
            </div>
            <div className='social-icons mt-4 flex md:justify-end'>
              <a href="https://www.linkedin.com/in/deepak-kashyap-059225234/" target="_blank"><FaLinkedinIn className='text-teal-600' size={20} /></a>
              <a href="mailto:deepakkashyap1100@gmail.com"><IoMdMailUnread className='text-teal-600' size={25} /></a>
              <a href="https://github.com/deepakgitoffical"><FaGithub className='text-teal-600' size={20} /></a>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-4 mt-4'>
          <div className=' max-w-44 '>
            <a href='contact' className='text-white  animate-pulse animate-delay-900 bg-teal-600 py-2.5 px-2 text-center rounded-md flex align-center'> <IoMdMailUnread className='me-2' size={25} />Contact Me</a>
          </div>
          {/* <div className=' max-w-48 '>
            <a href={cv} target='_blank' className='text-white bg-pink-600 py-2.5 px-2 text-center rounded-md flex align-center'> <IoMdDownload className='me-2' size={25} />Download CV</a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
