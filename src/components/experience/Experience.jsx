import React from 'react'
import {AiFillCheckSquare} from 'react-icons/ai'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <AiFillCheckSquare className='experience__details-icon' />
                <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckSquare className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckSquare className='experience__details-icon' />
                <div>
                  <h4>JavaScript JSX</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>

        <a href="#portfolio" className='scroll__down experience__scroll__down'>Scroll Down →</a>
        
      </div>
    </section>
  )
}

export default Experience