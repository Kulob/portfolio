import React from 'react'
import './Testimonials.scss'
import avt1 from "../../assets/avatar1.jpg";
import avt2 from "../../assets/avatar2.jpg";
import avt3 from "../../assets/avatar3.jpg";
import avt4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const data = [
  {
    avatar: avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nulla neque, at beatae necessitatibus sed, ipsum incidunt dicta ad, alias adipisci. Pariatur, consectetur aspernatur error non quis repudiandae odio cupiditate?'
  },
  {
    avatar: avt2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nulla neque, at beatae necessitatibus sed, ipsum incidunt dicta ad, alias adipisci. Pariatur, consectetur aspernatur error non quis repudiandae odio cupiditate?'
  },
  {
    avatar: avt3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nulla neque, at beatae necessitatibus sed, ipsum incidunt dicta ad, alias adipisci. Pariatur, consectetur aspernatur error non quis repudiandae odio cupiditate?'
  },
  {
    avatar: avt4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nulla neque, at beatae necessitatibus sed, ipsum incidunt dicta ad, alias adipisci. Pariatur, consectetur aspernatur error non quis repudiandae odio cupiditate?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
      >
        {
          data.map(({name, avatar, review}, index) =>{
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small client__review>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
