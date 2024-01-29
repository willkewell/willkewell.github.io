import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Currency Dashboard & Financial Visualisation',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Charts Templates & Infographics in Figma',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Figma Dashboard UI Kit for Data Design Web Apps',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Maintaining Tasks & Tracking Progress',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Charts Templates & Infographics in Figma',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Charts Templates & Infographics in Figma',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>

        <h2>My Portfolio</h2>
        <div className="container portfolio__container">
            <div className="portfolio__items">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" rel='opener'>Github</a>
                                    <a href={demo} className="btn btn-primary" rel='opener'>Demo</a>
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