import React, { useState } from 'react';
import './Portfolio.scss';
import IMG1 from '../../assets/portfolio1.png';
import IMG_2 from '../../assets/pizza12.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCloseCircle } from 'react-icons/ai';

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
      title: 'React Pizza',
      github: 'https://github.com/Kulob/React-Pizza',
      demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },
    {
      id: 2,
      image: IMG2,
      title: 'React Sneakers',
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
      title: 'React Booking',
      github: 'https://github.com/Kulob/mern-hotel.git',
      // demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id: 6,
      image: IMG6,
      title: 'React Blog',
      github: 'https://github.com/Kulob/mern-fullstack.git',
      // demo: 'https://dribbble.com/shots/19773335-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((photo, i) => {
          return (
            <article key={photo.id} className="portfolio__item">
              <div onClick={() => handleOpen(i)} className="portfolio__item-image">
                <img src={photo.image} alt="portfolio image" />
              </div>
              <h3>{photo.title}</h3>
              <div className="portfolio__item-cta">
                <a href={photo.github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={photo.demo} className="btn btn-primary">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
        {openModel && (
          <div className="slider">
            <AiOutlineCloseCircle onClick={() => setOpenModel(false)} className="close" />

            <img src={data[slideNumber].image} alt="" className="sliderImg" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
