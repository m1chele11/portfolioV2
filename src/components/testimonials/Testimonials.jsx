import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/leet.png'
import AVTR2 from '../../Assets/gym.gif'
import AVTR3 from '../../Assets/google-logo-png-icon-free-download-SUF63j.png'
import AVTR4 from '../../Assets/goals.jpg'

// import Swiper core and required modules
import { Pagination,   A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1, 
    name: 'Leetcode', 
    review: 'I like to practice my coding skills and creativity. (also get mad at the compiler once in a while)'
  }, 
  {
    avatar: AVTR2, 
    name: 'Gym', 
    review: 'The gym is a part of my life, every time I go is a new challenge and chance to improve myself'
  }, 
  {
    avatar: AVTR3, 
    name: 'Research', 
    review: 'Looking up how to do this in different languages or if there are ways to do what Im doing better, and learn new knowledge.'
  }, 
  {
    avatar: AVTR4, 
    name: 'Setting Goals', 
    review: 'I set goals weekly and I want to crush them'
  }, 

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What I enjoy doing</h5>
      <h2>A little more about me</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => 
          {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}
                </small>
              </SwiperSlide>
            )
          })
        } 
      </Swiper>
     </section>
  )
}

export default Testimonials