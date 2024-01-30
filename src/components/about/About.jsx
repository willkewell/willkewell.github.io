import React from 'react'
import CV from '../../assets/W-Kewell-CV.pdf'
import { RiGraduationCapLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { GrFolder } from "react-icons/gr";
import { GrDocumentDownload } from "react-icons/gr";
import './about.css'

const About = () => {
  return (
    <section id='about'>
        <h2>About Me</h2>
        
        <div className="container about__container">
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <a href={CV} download>
                            <RiGraduationCapLine size={25}/>
                            <h4>Education</h4>
                            <small>2.1 Computer Science, University of Southampton</small>
                            <h5 className='h5 h5-hidden'><GrDocumentDownload />CV</h5>
                        </a>
                    </article>
                    <article className="about__card">
                        <a href="#experience">
                            <GrCertificate size={25}/>
                            <h4>Experience</h4>
                            <small></small>
                            <h5 className='h5 h5-hidden'>Click to see experience details</h5>
                        </a>
                    </article>
                    <article className="about__card">
                        <a href="#portfolio">
                            <GrFolder size={25}/>
                            <h4>Portfolio</h4>
                            <small>My Projects</small>
                            <h5 className='h5 h5-hidden'>Click to view my portfolio</h5>
                        </a>
                    </article>
                    
                </div>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate maxime eaque sit repellat ipsa qui animi delectus consequatur quidem cumque!
                </p>

                <a href="#contact" className='btn btn-primary'>Learn More</a>
            </div> 

            <a href="#experience" className='scroll__down about__scroll__down'>Scroll Down →</a>     

        </div>
    </section>
  )
}

export default About