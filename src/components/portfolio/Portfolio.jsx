import React, { useState } from 'react'
import './Portfolio.scss'
import IMG1  from "../../assets/portfolio1.png";
import IMG_2  from "../../assets/pizza12.png";
import  IMG2  from "../../assets/portfolio2.png";
import  IMG3  from "../../assets/portfolio3.png";
import  IMG4  from "../../assets/portfolio4.jpg";
import  IMG5  from "../../assets/portfolio5.png";
import  IMG6  from "../../assets/portfolio6.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCloseCircle} from "react-icons/ai";
import Slider from 'infinite-react-carousel';




const Portfolio = () => {
  const [openModel, setOpenModel] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpenModel(true);
  };

  const data = [
    {
      id: 1,
      image: IMG1,
      image2: IMG_2,
      title:'React Pizza',
      github: 'https://github.com/Kulob/React-Pizza',
      demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },
    {
      id: 2,
      image: IMG2,
      title:'React Sneakers',
      github: 'https://github.com/Kulob',
      // demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id: 3,
      image: IMG3,
      title: 'React Lamastore',
      github: 'https://github.com/Kulob',
      // demo: 'https://dribbble.com/shots/19314386-Visualization-of-global-data-on-the-interactive-map'
    },
    {
      id: 4,
      image: IMG4,
      title: 'React Planes',
      github: 'https://github.com/Kulob/Planes.git',
      // demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Eclipse - Figma dashboard UI kit for data design web apps',
      github: 'https://github.com/Kulob',
      // demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Eclipse - Figma dashboard UI kit for data design web apps',
      github: 'https://github.com/Kulob',
      // demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((photo, i) => {
            return (
              <article key={photo.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={photo.image} alt="portfolio image"/>
          </div>
          <h3>{photo.title}</h3>
          <div className="portfolio__item-cta">
            <a href={photo.github} className="btn" target='_blank'>Github</a>
            <button onClick={() => handleOpen(i)} className="btn btn-primary">Live Demo</button>  
          </div>         
        </article>
            )})
        }
         {
          openModel && 
          <div className='slider'>
          <AiOutlineCloseCircle onClick={() => setOpenModel(false)} className='close'/>
            <Slider className='sliderWrapper'>

          <img src={data[slideNumber].image} alt="" className="sliderImg" />
          <img src={data[slideNumber].image2} alt="" className="sliderImg" />
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
