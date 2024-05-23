import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Michele</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/m1chele11" target='_blank'><BsGithub/></a>
        <a href="http://www.linkedin.com/in/michele-barrantes-455206255" target='_blank'><AiFillTwitterCircle/></a>
        <a href="http://www.linkedin.com/in/michele-barrantes-455206255" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Michele Barrantes. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer