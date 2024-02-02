import React from 'react'
// import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import IMG1 from '../../assets/cv-site-portfolio-pic-crop.png'

import { GrStatusWarning } from "react-icons/gr";
import './portfolio.css'

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'CV / Portfolio Website',
      github: 'https://github.com/willkewell/willkewell.github.io',
      demo: 'https://willkewell.github.io',
      state: 'complete'
    },
    {
      id: 2,
      image: IMG4,
      title: 'Sockets Chess',
      github: 'https://github.com',
      demo: 'https://dribbble.com',
      state: 'WIP'
    },
    {
      id: 3,
      image: IMG5,
      title: 'Chatroom Webapp',
      github: 'https://github.com',
      demo: 'https://dribbble.com',
      state: 'WIP'
    },
    {
      id: 4,
      image: IMG6,
      title: 'Recipe Mobile App',
      github: 'https://github.com',
      demo: 'https://dribbble.com',
      state: 'Planned'
    }
  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>

        <h2>My Portfolio</h2>
        <div className="container portfolio__container">
            <div className="portfolio__items">
                {
                    data.map(({id, image, title, github, demo, state}) => {
                        return(
                            <article key={id} className={"portfolio__item portfolio__item-" + state}>
                                <div className={"portfolio__item-image portfolio__item-" + state + "-image"}>
                                    <div className={"portfolio__item-" + state  + "-status"}>
                                      <h4><GrStatusWarning /> {state}</h4>
                                    </div >
                                    <div className={"portfolio__item-" + state  + "-status-blur"} />
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className={"portfolio__item-cta portfolio__item-" + state + "-cta"}>
                                    <a href={github} className={"btn btn- " + state} target="_blank" rel='noreferrer'>Github</a>
                                    <a href={demo} className={"btn btn-primary btn-primary- " + state} target="_blank" rel='noreferrer'>Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
          <a href="#contact" className='scroll__down portfolio__scroll__down'>Scroll Down →</a>
        </div>
    </section>
  )
}

export default Portfolio