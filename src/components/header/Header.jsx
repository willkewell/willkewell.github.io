import React from 'react'
import CTA from './CTA'
import ME from '../../assets/graduation-alt-crop.jpg'
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
                <div className="header__me-deco" />
              </div>
            </div>

            <div className="header__container-deco" /> 

            <a href="#about" className='scroll__down header__scroll__down'>Scroll Down →</a> 

        </div>
    </header>
  )
}

export default Header 