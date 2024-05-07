import React, { useEffect, useState } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../Assets/AvatarMic-removebg-preview.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const text = "Michele Barrantes";

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length === typedText.length) {
        clearInterval(interval);
      } else {
        setTypedText(prevText => prevText + text.charAt(prevText.length));
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>{typedText}</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
