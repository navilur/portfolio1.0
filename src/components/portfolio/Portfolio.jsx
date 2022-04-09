import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "DDAD",
    github: "https://github.com/navilur",
    demo: "https://navilur.github.io/DDAD/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Mobile Shopee",
    github: "https://github.com/navilur",
    demo: "https://navilur.github.io/mobile-shopee/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather App",
    github: "https://github.com/navilur",
    demo: "https://navilur.github.io/weather-app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "E-Shopper (Woocommerce)",
    github: "https://github.com/navilur",
    demo: "https://navilur.github.io/demo_dashboard/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Blog (Laravel)",
    github: "https://github.com/navilur",
    demo: "https://github.com/navilur",
  },
  {
    id: 6,
    image: IMG6,
    title: "Task Tracker (ReactJS)",
    github: "https://github.com/navilur",
    demo: "https://github.com/navilur",
  },
  {
    id: 7,
    image: IMG3,
    title: "Movie App (NuxtJS)",
    github: "https://github.com/navilur",
    demo: "https://github.com/navilur",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
