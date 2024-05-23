/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/my-pic.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "🌍 World Wise",
    description:
      "Effortlessly explore 🌍, discover city details 🏙️, and track countries. Powered by React ⚛️, React Router 🛣️, and react-leaflet for immersive maps. Add notes, track adventures 🚀, and embark seamlessly.",
    url: "https://worldwise-prakash.netlify.app/",
  },
  {
    title: "Film🎞️Fusion",
    description:
      "Flim Fusion is a React application that enhances the movie-watching experience by seamlessly integrating with the OMDB API. 🎬 Users can easily explore, rate, and manage their watched movies list",
    url: "https://filmfusionn.netlify.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. 🌐 Includes my experience and design abilities. 🎨💼",
    url: "https://resume-prakash.netlify.app/",
  },
  {
    title: "React-Quiz ⚛️",
    description:
      "Dive into the React Quiz App! Race against the clock with 15 questions from a custom API. Each question gets just 30 seconds. Challenge your React know-how and get your score at the end! 🧠✨",
    url: "https://reactquizforyall.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }} className="section__pic-container">
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "contain", marginLeft: "20px" }}
            alt={imageAltText}
            className=""
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
