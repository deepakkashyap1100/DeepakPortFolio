import React from 'react'
import { FaReact } from "react-icons/fa";
import tailwindicon from "../images/tailwindcss-icon.svg";
import reduxicon from "../images/redux-original.svg";
import profile from "../images/dp.jpg";

const About = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <div className='container py-5'>
          <div className="grid grid-cols-1 lg:grid-cols-3    gap-4 mx-auto">
            {/* column---------- */} 
                <div className="dp-imgae mx-auto">
                    <img src={profile} alt="" />
                </div> 
            <div className="100 lg:col-span-2 col-auto  shadow-slate-300"> 
                <h2 className='lg:text-2xl text-xl font-medium mb-4 heading-line'>More About Me</h2>
                <p className='text-gray-600 select-none'>I gained hands-on experience building responsive and interactive web applications. I became proficient in HTML, CSS, and JavaScript, utilizing frameworks like <strong>React Js</strong> to enhance user interfaces and improve performance. I collaborated with designers to translate UI/UX wireframes into functional, pixel-perfect pages and worked closely with backend teams to integrate APIs. Additionally, I learned to write clean, maintainable code and used version control with Git to manage codebases efficiently. Debugging and optimizing for various browsers and devices became second nature, and I grew comfortable adapting to agile development workflows.</p>
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}

export default About