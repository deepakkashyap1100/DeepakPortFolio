import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Switch from '@mui/material/Switch';
import topLogo from "../images/fav.svg";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
const Header = () => {
    const [IsDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
    IsDark ? document.body.classList.add('dark') : document.body.classList.remove('dark')


    useEffect(() => {
        document.body.className = IsDark ? 'dark-theme' : 'light-theme';
    }, [IsDark])

    return (
        <header className={`shadow-md  sticky  inset-y-0 z-10 bg-white`}>

            <div className="container mx-auto p-3">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 items-center">
                    <div className="column ">
                        <h4 style={{ color: 'orange', fontWeight: 'bold' }}><NavLink to="/"><span className='flex items-center gap-1'><img src={topLogo} alt="" className='' /><span className='text-teal-500'>DEEPAK</span> </span> </NavLink></h4>
                    </div>
                    <div className="column lg:col-span-10  md:col-span-10  col-span-1 mx-auto">
                        <div className="navbar flex justify-center">
                            <ul className='flex'>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="about">About</NavLink></li>
                                <li><NavLink to="skill">Skills</NavLink></li>
                                <li><NavLink to="project">Our Project</NavLink></li>
                                {/* <li><NavLink to="contact">Contact</NavLink></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <button onClick={() => {
                            setIsDark(!IsDark)
                            document.body.classList.toggle('dark-theme')
                            localStorage.setItem('isDarkMode', !IsDark)
                        }}
                            className="flex items-center  text-pink-700 py-1 ">
                            {/* {IsDark ? 'Light' : 'Dark'} */}
                            {IsDark ? <FaSun className="ps-2 " size={30} /> : <FaMoon className="ps-2" size={30} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
