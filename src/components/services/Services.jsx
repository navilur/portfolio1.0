import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services__container container">
        <div></div>
        <article className="services">
          <div className="services__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Crypto Website</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Crypto Dashboard</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Portfolio Website</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>React App</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Vue App</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Wordpress Websites</p>
            </li>
          </ul>
        </article>
        <div></div>
      </div>
    </section>
  );
};

export default Services;
