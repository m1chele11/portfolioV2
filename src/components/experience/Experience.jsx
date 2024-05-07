import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>My skills technical and non technical </h5> 
    <h2>Skills</h2>

    <div className="container experience__container">
    <div className="experience__frontend">
      <h3>Frontend Development</h3>
    <div className="experience__content">
      <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'></small>   
        </div>
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'></small>   
        </div>
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'></small> 
        </div>  
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'></small>   
        </div>
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Tailwind</h4>
        <small className='text-light'></small>    
        </div> 
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>React</h4>
        <small className='text-light'></small>
        </div>   
         </article>
      </div>
    </div>

    {/*END OF FRONT*/}

    <div className="experience__backend">
    <h3>Backend Development</h3>
    <div className="experience__content">
      <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Node JS</h4>
        <small className='text-light'></small>    
        </div> 
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>C</h4>
        <small className='text-light'></small>  
        </div>   
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>PHP</h4>
        <small className='text-light'></small>
        </div>   
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Python</h4>
        <small className='text-light'></small>
        </div>   
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Java</h4>
        <small className='text-light'></small>
        </div>   
         </article>
      </div>
    </div>

     {/*END OF BACK*/}

     <div className="experience__backend">
    <h3>Interpersonal Skills</h3>
    <div className="experience__content">
      <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Collaboration</h4>
        <small className='text-light'>I enjoy working with others, and having goals to achieve with team-members.</small>    
        </div> 
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Communication</h4>
        <small className='text-light'>Strong and Clear communication is something I value and respect.</small>  
        </div>   
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Independent</h4>
        <small className='text-light'>Able to carry out task alone and be trusted to seek help if needed.</small>
        </div>   
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Creative</h4>
        <small className='text-light'>I enjoy thinking of solutions, creativity is challenging but definetly worth cultivating.</small>
        </div>   
         </article>
         <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Curious</h4>
        <small className='text-light'>I am hungry for new information and always following hunches to see where they lead. </small>
        </div>   
         </article>
      </div>

    </div>
  </div>
     </section>

     
  )
}

export default Experience