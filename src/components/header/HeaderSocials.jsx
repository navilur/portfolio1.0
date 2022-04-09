import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/navilur-rahman-360985175/"
        target="_blank"
      >
        <FiLinkedin />
      </a>
      <a href="https://www.facebook.com/navilur.rahman" target="_blank">
        <FiFacebook />
      </a>
      <a href="https://github.com/navilur" target="_blank">
        <FiGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
