import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImDribbble } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a> */}
      <a href="https://github.com/Kulob" target='_blank'><BsGithub/></a>
      {/* <a href="https://dribble.com" target='_blank'><ImDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials