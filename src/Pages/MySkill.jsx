import React from 'react'
import { FaReact } from "react-icons/fa";
import tailwindicon from "../images/tailwindcss-icon.svg";
import reduxicon from "../images/redux-original.svg";
import figma from "../images/figma.svg";
import mysqlicon from "../images/mysql.png";
import json from "../images/json.png";
import ajax from "../images/ajax.png";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssLight } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { SiAxios } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";

const MySkill = () => {

  
  return (
    <>
        <section className='py-5 my-skill'>
            <div className="container">
            <h2 className='lg:text-2xl text-xl font-medium mb-4 text-gray-800'>My Skill</h2> 
             
            <div className="skill-icon grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3"> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                  <FaReact size={44} className=" text-sky-500" /> <span className='font-medium text-2'>React</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                  <img src={tailwindicon} alt="" width={44} /> <span className='font-medium text-2'>Tailwind CSS</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                  <img src={reduxicon} alt=""  width={44}/> <span className='font-medium text-2 leading-tight'>Redux Tookit</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <SiMui size={44} className=" text-sky-500" /><span className='font-medium text-2'>Material UI</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <SiAxios size={44} className='text-blue-900'/><span className='font-medium text-2'>AXIOS</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <IoLogoJavascript size={44} className=" text-yellow-400" /><span className='font-medium text-2'>JavaScript</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <TiHtml5 size={44} className=" text-red-600" /><span className='font-medium text-2'>HTML</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <PiFileCssLight size={44} className=" text-blue-600" /><span className='font-medium text-2'>CSS</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <SiPhp size={44} className=" text-blue-500" /><span className='font-medium text-2'>PHP</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <img src={mysqlicon} alt="" width={44}  /><span className='font-medium text-2'>MySQL</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <img src={ajax} alt="" width={44}  /><span className='font-medium text-2'>AJAX</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <FaBootstrap size={44} className='text-blue-800'/><span className='font-medium text-2'>Bootstrap</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <BiLogoJquery size={44} className='text-pink-600'/><span className='font-medium text-2'>JQuery</span>
                </div> 
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <img src={json} alt="" width={44}  /><span className='font-medium text-2 uppercase'>json API</span>
                </div>
                
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <FaGitAlt size={44} className='text-orange-600'/><span className='font-medium text-2'>Git</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                <FaWordpress size={44} className='text-sky-600'/><span className='font-medium text-2'>WordPress</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                  <DiPhotoshop size={44} className='text-blue-950'/><span className='font-medium text-2'>Photoshop</span>
                </div>
                <div className='p-2 bg-gray-100 flex items-center  gap-3'>
                  <img src={figma} alt="" height={35}  /><span className='font-medium text-2'>Figma</span>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default MySkill