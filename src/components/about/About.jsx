import React from 'react';
import './About.scss';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import AboutImage from '../../assets/meAbout.jpg';

const About = () => {
  return (
    <section id="about" className="section__about">
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
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article> */}
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>200+ Worldwide</small>
            </article> */}
            {/* <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Experience</h5>
              <small>20+ Completed</small>
            </article> */}
          </div>
          <p>
            Здравствуйте! Я - фронтенд-разработчик с более чем 1,5-летним опытом работы в этой
            области. Я специализируюсь на создании веб-сайтов и приложений, используя HTML, CSS,
            JavaScript и TypeScript. Я имею опыт работы с фреймворк, такими как React и умею
            работать с библиотеками, такими как Tailwind и MUI.
          </p>
          <p>
            Я также обладаю навыками работы с базами данных, такими как MySQL и MongoDB, и имею опыт
            работы с системами контроля версий, такими как Git. Я всегда стремлюсь к созданию
            качественного и удобного для пользователей интерфейса, а также к оптимизации
            производительности веб-приложений.
            <br /> Мои сильные стороны включают в себя разработку адаптивных веб-сайтов, создание
            пользовательских интерфейсов, оптимизацию производительности, а также работу с API и
            интеграцию с другими сервисами.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
