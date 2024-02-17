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
import image from "../images/img2.avif";

const imageAltText = "A clear sky with some stars.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Detectovert",
    description:
      "It's an Ai model which will create a pattern of the movements you will make infront of your camera when you execute this program.",
    url: "https://github.com/octonawish-akcodes/Detectovert",
  },
  {
    title: "FacialTraitAnalyzer",
    description:
      "FaceTraitsAnalyzer is a Django web application designed for age and gender detection in images. Leveraging the power of OpenCV and pre-trained models, this application allows users to upload images and receive real-time analysis of facial features. This is a Django web application that performs age and gender detection on uploaded images using OpenCV and pre-trained models.",
    url: "https://github.com/octonawish-akcodes/FacialTraitAnalyzer",
  },
  {
    title: "ScriptHarbour",
    description:
      "ScriptHarbour is a comprehensive suite of scripts designed to automate common system administration tasks, ensuring efficiency and reliability in managing systems across various platforms.",
    url: "https://github.com/octonawish-akcodes/ScriptHarbour",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
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
