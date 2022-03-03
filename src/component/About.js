import React from "react";
import Button from "@mui/material/Button";
import "./About.css";
import about from "../image/about.jpg";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="About_container" id="Home">
      <div>
        <p className="hi_text">Hi, there </p>
        <p className="myname">
          My name is
          <span className="text_highlight"> Vinuppriya Balachandran</span>
        </p>
        <p className="developerLine">
          I am a Full-Stack Developer who likes building stuff with
          <p className="text_highlight developerLine">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("JavaScript ")
                  .pauseFor(1000)
                  .typeString("ReactJS ")
                  .pauseFor(1000)
                  .typeString("NodeJS ")
                  .pauseFor(1000)
                  .typeString("ExpressJS ")
                  .pauseFor(1000)
                  .typeString("MongoDB")
                  .start();
              }}
            />
          </p>
        </p>
      </div>

      <div className="AboutDetail_btns">
        <a href="https://github.com/vinuppriyaB" target="_blank">
          <Button className="Resume_btn" variant="outlined">
            <GitHubIcon className="icon" />
            Git
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/vinuppriya-balachandran-a7446456/"
          target="_blank"
        >
          <Button className="Resume_btn" variant="outlined">
            <LinkedInIcon className="icon" />
            LinkedIn
          </Button>
        </a>
        <a
          href="https://drive.google.com/file/d/1e5wasI4N9z0OSovIdzET9VyS7ejwwWD1/view"
          target="_blank"
        >
          <Button className="Resume_btn" variant="outlined">
            <PersonSearchIcon className="icon" />
            view CV
          </Button>
        </a>
      </div>
      <div className="About_image"></div>
    </div>
  );
};

export default About;

// <img className="image" alt="about"  src={ about }/>

//    <div className="about_text">
//     I am Self-motivated, highly passionate and quickly adaptable person
//     looking for an opportunity to work in a challenging organization where I
//     can learn new skills, expand my knowledge and to work towards the growth
//     of the organization to the best of my abilities.
//   </div>
