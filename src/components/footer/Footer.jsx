import React from 'react'
import CV from '../../assets/W-Kewell-CV.pdf'
import Socials from '../socials/Socials'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
        <a href="#" className='footer__header'>William Kewell</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <Socials className='footer__socials' />
    </footer>
  )
}

export default Footer