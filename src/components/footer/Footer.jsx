import React from 'react'
import './Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mirovon</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mirovon. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
