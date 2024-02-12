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
        <h2>About</h2>
        
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

                <h4>About Me</h4>
                <p>
                I am an able and hardworking individual and have recently graduated from Southampton University achieving a 2.1 in Computer Science BSc.  My goal is to kickstart my career with a role in the world of software & development, working in a fast moving and energetic environment. Proficient programmer, eager to learn and develop my existing skills, passionate about all things programming.
                </p>

                <h4>About This Website</h4>
                <p>
                    This website was built by me using React JS. I am always trying to learn new skills and improve my existing ones, and will be adding to this website and my github account regularly, so please check back for updates. If you would like to get in touch regarding a job opportunity or just to learn more, please download my CV or use the contact section at the bottom of the page to send me a message. I look forward to hearing from you soon!
                </p>

                <a href="#contact" className='btn btn-primary'>Learn More</a>
            </div> 

            <a href="#experience" className='scroll__down about__scroll__down'>Scroll Down →</a>     

        </div>
    </section>
  )
}

export default About