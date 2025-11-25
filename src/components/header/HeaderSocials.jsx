import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/khudobakhsh-m-1973b72a9/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kulob" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      {/* <a href="https://dribble.com" target='_blank'><ImDribbble/></a> */}
    </div>
  );
};

export default HeaderSocials;
