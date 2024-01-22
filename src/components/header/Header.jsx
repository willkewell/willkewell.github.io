import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Me-Square.jpeg'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <div className="header__content">
              <h1>Will Kewell</h1>
              <h5 className="text-light">Computer Science Graduate</h5>
              <CTA />
            </div>

            <div className="header__me">
              <div className="header__me-image">
                <img src={ME} alt="" />
              </div>
              <div className="header__me-deco" />
            </div>

            <div className="header__container-deco" />                
        </div>

        <a href="#about" className='scroll__down header__scroll__down'>Scroll Down →</a>  
    </header>
  )
}

export default Header 