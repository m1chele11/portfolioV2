import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://www.linkedin.com/in/michele-barrantes-455206255" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/m1chele11" target='_blank'><FaGithub/></a>
        {/* <a href="https://www.instagram.com/baby.mic_/" target='_blank'><FaInstagramSquare/></a> */}

    </div>
  )
}

export default HeaderSocials