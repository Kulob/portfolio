import { AiOutlineInstagram } from "react-icons/ai";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mirovon</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/Mirovon55"><BsTelegram/></a>
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
