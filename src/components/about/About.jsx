import React from "react";
import "./About.scss";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import AboutImage from "../../assets/meAbout.jpg";

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
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Organizations</h5>
              <small>2+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello, I am a front-end developer with over 2.5 years of experience
            in creating modern and functional web interfaces. My goal is to
            develop user-friendly, high-performing, and aesthetically pleasing
            products that meet user needs and business objectives. I specialize
            in building components and applications using React, Redux, Zustand,
            and other modern tools. I am proficient in TypeScript, which enables
            me to write robust and scalable code.
            <br />
            <b>Frontend development:</b> React, Redux, Zustand, Redux Toolkit,
            JavaScript (ES6+), TypeScript, Next.js, React Query, React Hook
            Forms, Zod <br />
            <b>Backend:</b> Express.js, Node.js, Git <br />
            <b>Databases:</b> MongoDB <br />
            <b>Layout:</b> HTML5, CSS3, SCSS/SASS, Tailwind <br />
            <b> UI libraries:</b> MUI, Zod, Ant Design, Chakra UI Cross-browser
            and adaptive layout <br />
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
