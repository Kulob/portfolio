import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import AboutImage from "../../assets/meAbout.jpg";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="section__about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImage} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Organizations</h5>
              <small>4+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello, Experienced Front End Developer with a focus on Fintech projects, boasting over four years of dedicated experience in the field. My expertise lies in crafting innovative solutions for complex financial systems, leveraging advanced technologies and industry best practices. I excel in developing custom UI component libraries, meticulously crafted to ensure seamless integration and intuitive user interfaces. Working closely with design tools like Figma, I collaborate with stakeholders to set up robust architectures that align with project goals and user requirements.
            <br />
            <b>Core:</b> React 18, Next.js, TypeScript, JavaScript (ES2022+) <br />
            <b>State &amp; data:</b> Redux Toolkit, Zustand, TanStack Query, Axios,
            WebSockets, REST API, Zod, React Hook Form <br />
            <b>Markup &amp; styling:</b> HTML5, CSS3, SCSS/SASS, Tailwind CSS,
            responsive &amp; cross-browser layout <br />
            <b>UI libraries:</b> MUI, Ant Design, Chakra UI, Radix UI, Chart.js <br />
            <b>Tooling:</b> Vite, Webpack, Git, Docker, CI/CD, Jest, React Testing
            Library, Figma, i18next <br />
            <b>Also:</b> Node.js, Express.js, MongoDB (basic — enough to build and
            debug an API) <br />
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
