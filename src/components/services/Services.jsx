import React from 'react'
import './Services.scss'
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id='section'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
