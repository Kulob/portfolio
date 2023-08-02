import React from 'react'
import './About.scss'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import  AboutImage from "../../assets/meAbout.jpg";


const About = () => {
  return (
    <section id='about' className='section__about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article >
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          I like the frontend developer, I spend a huge amount of time on it, constantly growing and developing in this direction.
          </p>
          <div className='btn btn-primary'>Let's Talk</div>
        </div>
      </div>
    </section>
  )
}

export default About
