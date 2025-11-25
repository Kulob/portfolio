import Me from "../../assets/me.jpg";
import CTA from "./CTA";
import './Header.scss';
import HeaderSocials from "./HeaderSocials";

 const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mirovon</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        
        <HeaderSocials/>
        <div className="me">
          <img className='me__img' src={Me} alt='me'/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        
      </div>
    </header>
  )
}
export default Header