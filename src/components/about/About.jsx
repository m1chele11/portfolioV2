import React from 'react'
import './about.css'
import ME from '../../Assets/me2.JPG'
import {FaUserGraduate} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FcOpenedFolder} from 'react-icons/fc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaUserGraduate className='about__icon'/>
            <h5>CS Student</h5>
            <small>Luddy at Indiana University</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>None... yet</small>
          </article>

          <article className='about__card'>
            <FcOpenedFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>Find them below</small>
          </article>
        </div>

        <p>
         I am an upcoming 3rd year student at Indiana University, Bloomington. I am studying computer
         science with a specialization in software engineering at the Luddy school of informatics, computing and engineering. 
         Eagerly looking to get some hands-on experience in the tech industry to put my skills to the test, and 
         learn new skills while collaborating with a team by implementing the skills I have gained in the classroom
         alongside with personal projects. I believe I am keen and determined to develope and sharpen my skills. 
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About