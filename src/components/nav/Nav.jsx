import React from 'react'
import { useState } from 'react'
import { GrHome } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import { GrList } from "react-icons/gr";
import { GrFolder } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><span className='nav-text'>Home </span><GrHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><span className='nav-text'>About </span> <GrUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><span className='nav-text'>Experience </span> <GrList /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><span className='nav-text'>Portfolio </span> <GrFolder /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span className='nav-text'>Contact </span> <GrMailOption /></a>
    </nav>
  )
}

export default Nav