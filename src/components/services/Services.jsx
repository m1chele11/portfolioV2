import React from 'react'
import './services.css'
import {FcApproval} from 'react-icons/fc'

const Services = () => {
  return (
    <section id='services'>
         <h5> Job and in the Classroom</h5>
         <h2> Experience</h2>
         <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Lifeguard</h3>
            </div>

            <ul className='service__list'>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Collaborated in a team environment to provide the best safety and experience to patrons </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Proficiently communicated and coordinated with other team members or guest to resolve daily task </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Attention to detail and being able to multi-task in uncomfortable situations </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Trusted to open at 5am and keep watch over pool and patrons alone </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Creatively to solve or deescalate situations with guest at the pool </p>
            </li>
            </ul>
            </article>
            {/* End of LIFEGUARD*/}

            <article className="service">
            <div className="service__head">
              <h3>Assistant Supervisor</h3>
            </div>

            <ul className='service__list'>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Coordinate with the Head Supervisor to assure that all games are running on time</p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Supervise my team of officials while putting them in the best position possible to deliver a memorable experience</p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Resolve conflicts between players, and de-escalate conflicts regarding officials or players </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Attention to detail of communication when calling 911 for injuries or checking IDs </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Provide an end game shift report and report any penalties or feedback to superiors </p>
            </li>
            </ul>
            </article>
            {/* WEB Development*/}

            <article className="service">
            <div className="service__head">
              <h3>Relevant Coursework</h3>
            </div>

            <ul className='service__list'>
            <li>
              <FcApproval className='service__list-icon'/>
              <p>Computing & Programming with Python</p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Intro to software systems with Java </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Discrete structures & Algorithms for CS</p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Data structures </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Mobile App development </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Programing with C and Unix </p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Tools for Computing CGI/PHP</p>
            </li>
            <li>
              <FcApproval className='service__list-icon'/>
              <p> Tools for Computing JavaScript </p>
            </li>
            </ul>
            </article>
            {/* End of Content Creation*/}
          </div>
    </section>
  )
}

export default Services