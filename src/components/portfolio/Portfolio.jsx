import React from 'react'

import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import IMGsite from '../../assets/cv-site-portfolio-pic-crop.png'
import IMGsudo from '../../assets/sudoku-placeholder-img.png'
import IMGchat from '../../assets/websocket-chat-app-img-crop.png'
import IMGroadacc from '../../assets/road-accident-analysis-app-img-crop.png'

import { GrStatusWarning } from "react-icons/gr";
import './portfolio.css'

const data = [
    {
      id: 5,
      image: IMGroadacc,
      title: 'Road Accident Analysis Webapp',
      github: 'https://github.com/willkewell/road-accident-analysis-webapp',
      demo: 'https://willkewell.github.io/road-accident-analysis-webapp/',
      state: 'complete'
    },
    {
      id: 3,
      image: IMGchat,
      title: 'WebSocket Chat Webapp',
      github: 'https://github.com/willkewell/WebSocket-Chat-App',
      demo: 'https://github.com/willkewell/WebSocket-Chat-App',
      state: 'complete'
    },
    {
      id: 2,
      image: IMGsudo,
      title: 'Java Sudoku Solver',
      github: 'https://github.com/willkewell/JavaSudokuSolver',
      demo: 'https://github.com/willkewell/JavaSudokuSolver',
      state: 'complete'
    },
    {
      id: 1,
      image: IMGsite,
      title: 'CV / Portfolio Website',
      github: 'https://github.com/willkewell/willkewell.github.io',
      demo: 'https://willkewell.github.io',
      state: 'complete'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Library Management System',
      github: 'https://github.com',
      demo: '',
      state: 'WIP'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Java Chess',
      github: 'https://github.com',
      demo: '',
      state: 'WIP'
    },
    {
      id: 4,
      image: IMG5,
      title: 'Java Tetriz Brick Game',
      github: 'https://github.com',
      demo: '',
      state: 'Planned'
    }
  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>

        <h2>My Recent Projects</h2>
        <div className="container portfolio__container">
          <div className="portfolio__info">
            <h4>About This Section</h4>
            <p>
              As stated above, I will be updating this section regularly with the projects I am working on. I wanted to keep the standard of these projects to a good level, practicing good programming practice and documentation. As such, this section is a work in progress. Check back regularly for updates!
            </p>
          </div>
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