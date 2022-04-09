import React from "react";
import "./footer.css";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Navilur Rahman
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <div className="footer__social">
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
      <div className="footer__copyright">
        <small>
          &copy;{new Date().getFullYear()} Navilur Rahman. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
