import IMG4 from '../../assets/aion.jpeg';
import IMG3 from '../../assets/photo_2025-01-07 14.50.44.jpeg';
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG2 from '../../assets/zypl website.jpg';
import './Portfolio.scss';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Lucid.ai',
      github: 'https://github.com/Kulob',
      demo: 'https://github.com/Kulob',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Zypl.ai',
      github: 'https://github.com/Kulob',
      demo: 'https://zypl.ai'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Verido.ai Dashboard',
      github: 'https://github.com/Kulob',
      demo: 'https://verido-aidoc.switzerlandnorth.cloudapp.azure.com/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Aion.tj',
      github: 'https://github.com/Kulob',
      demo: 'https://aion.tj/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'React Booking',
      github: 'https://github.com/Kulob/mern-hotel.git',
      demo: 'https://mern-hotel.vercel.app/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'React Blog',
      github: 'https://github.com/Kulob/mern-fullstack.git',
      demo: 'https://github.com/Kulob'
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
              <div  className="portfolio__item-image">
                <img src={photo.image} alt="portfolio image" />
              </div>
              <h3>{photo.title}</h3>
              <div className="portfolio__item-cta">
                <a href={photo.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={photo.demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
