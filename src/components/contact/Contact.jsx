import React from 'react'
import './contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiMinutemailer className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mbarrant@iu.edu</h5>
            <a href="mailto:mbarrant@iu.edu" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIN</h4>
            <h5>Michele Barrantes</h5>
            <a href="http://www.linkedin.com/in/michele-barrantes-455206255" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>317-384-6363</h5>
            <a href="https://api.whatsapp.com/send?phone=3173846363" target='_blank'>Send a message</a>
          </article>


        </div>
        {/* End of COntact OPtions*/}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact