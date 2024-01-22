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
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home <GrHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About <GrUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience <GrList /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} >Portfolio <GrFolder /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact <GrMailOption /></a>
    </nav>
  )
}

export default Nav