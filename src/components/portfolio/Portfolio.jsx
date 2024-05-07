import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/Todo.jpeg'
import IMG2 from '../../Assets/undercon.png'


const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Todo app with REACT',
    github: 'https://github.com',
    demo: 'https://64cd1f5530bde62877e997d9--glittering-pegasus-565080.netlify.app'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Gym exercise browsing app',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>

      </section>
  )
}

export default Portfolio