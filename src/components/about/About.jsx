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
            <h5>Computer Science Student</h5>
            <small>Luddy at Indiana University</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Indiana</h5>
            <small>Hoosier</small>
          </article>

          <article className='about__card'>
            <FcOpenedFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>Find them below</small>
          </article>
        </div>

        <p>
        🚀 As a driven and enthusiastic 3rd-year Computer Science student specializing in software engin
        eering with a minor in security informatics at Indiana University's Luddy School 
        of Informatics, Computing, Engineering, I bring a strong academic foundation from the Internationa
        l School of Indiana's IB diploma program. Proficient in Java, Kotlin, Python, and C, as well as librarie
        s like React, React Native, and frameworks like Jetpack Compose, I'm passionate about developing inno
        vative solutions to complex problems. Eager to immerse myself in hands-on experiences and collaborative
         environments, I aim to contribute my technical expertise from coursework and personal projects 
        to innovate within a dynamic internship opportunity. Let's connect and explore the realms of tech together! 🌐💻
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About