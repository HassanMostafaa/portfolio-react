import React from "react";
import { ImNewTab } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Projects = ({ navSpace }) => {
  const allProjects = [
    {
      img: "./images/projects/blueCircle/Screenshot_2.png",
      title: "Blue Circle",
      txt: " Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "https://github.com/HassanMostafaa/BlueCircle",
      demo: "https://hassanmostafaa.github.io/BlueCircle/",
    },
    {
      img: "./images/projects/travelAgency/Screenshot_1.png",
      title: "TravelAgency",
      txt: "( HTML,CSS, Materialize CSS Framework ,basic Vanilla JS )",
      src: "https://github.com/HassanMostafaa/TravelAgency",
      demo: "https://hassanmostafaa.github.io/TravelAgency/",
    },
    {
      img: "./images/projects/firegram/Screenshot_1.png",
      title: "FireGram",
      txt: "A public Instagram clone ( Reactjs - Hooks - , JSON , Firebase DB -Storage / Host / Deploy- , CSS, framer-motion React Library , Lightbox Library ,Netlify )",
      src: "https://github.com/HassanMostafaa/fireGram-react-DeveloperBuild",
      demo: "https://firegram-react-build.netlify.app/",
    },
    {
      img: "./images/projects/travelSh/Screenshot_1.png",
      title: "TravelShare",
      txt: "(Basic HTML ,CSS Flex-box ,JS)",
      src: "https://github.com/HassanMostafaa/TravelShare",
      demo: "https://hassanmostafaa.github.io/TravelShare/",
    },
    {
      img: "./images/projects/weatherAp/Screenshot_2.png",
      title: "Weather App",
      txt: "Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "https://github.com/HassanMostafaa/react-weather-App",
      demo: "https://basic-weather-react-app.netlify.app/",
    },
    {
      img: "./images/projects/DASHBO/Screenshot_1.png",
      title: "Dashboard",
      txt: "Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "https://github.com/HassanMostafaa/phantom-text-productionBuild",
      demo: "https://phantom-tech-dashboard.netlify.app/",
    },
    {
      img: "./images/projects/ACTIVITYFEED/screencapture-hassanmostafaa-github-io-activityFeed-2022-07-08-10_10_44.png",
      title: "Actifity Feed",
      txt: "Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "https://github.com/HassanMostafaa/activityFeed",
      demo: "https://hassanmostafaa.github.io/activityFeed/",
    },
    {
      img: "./images/projects/udacity 1 NLP/Screenshot_2.png",
      title: "Udacity’s Article Evaluation Project",
      txt: "It’s a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found onother websites. built with (web pack , SASS , Nodejs,Express ,Javascript, MeaningCloud API , HTML ,unitTesting-Jest/Supertest)",
      src: "https://github.com/HassanMostafaa/Udacity-Project-1",
      demo: "https://articles-evaluation.netlify.app/",
    },

    {
      img: "./images/projects/iss live location/Screenshot_1.png",
      title: "ISS Live Location",
      txt: "Using A site for tracking the location of the International Space Station.with (Vanilla JS fetching API Data with a   real-time update, CSS Styling)",
      src: "https://github.com/HassanMostafaa/ISS-INFORMATION",
      demo: "https://hassanmostafaa.github.io/ISS-INFORMATION/",
    },

    {
      img: "./images/projects/equalizer/Screenshot_2.png",
      title: "Equalizer",
      txt: "(Basic HTML ,CSS Flex-box ,JS)",
      src: "https://github.com/HassanMostafaa/equalizer",
      demo: "https://hassanmostafaa.github.io/equalizer/",
    },
    {
      img: "./images/projects/myReads udacity proj/Screenshot_2.png",
      title: "Udacity’s NanoDegree BookShelf",
      txt: "It's a Book tracking App to save your currently Reading, Want to Read and read Books, You can also search for newbooks in the provided Udacity's Books Library API with a huge variety of Books and topics (Reactjs - StateManagement- , CSS and Udacity’s Book API )",
      src: "https://github.com/HassanMostafaa/Udacity-Project-2",
      demo: "https://myreads-udacity-app.netlify.app/",
    },
  ];
  const sliced = allProjects.slice(0, 3);
  const projects = navSpace ? allProjects : sliced;

  return (
    <div
      className="section2"
      style={{ paddingTop: navSpace ? "200px " : "50px" }}
    >
      {!navSpace ? (
        <Link
          style={{
            float: "right",
            transform: "translateY(-20px)",
            textDecoration: "underline",
          }}
          to="/projects"
        >
          See More →
        </Link>
      ) : (
        <Link style={{ float: "right" }} to="/">
          ← Home
        </Link>
      )}
      <h1 className="sectionTitle">Projects</h1>
      <p className="sectionDesc">Things that I am proud of</p>
      <div className="projects">
        {projects.map((project, ix) => {
          if (ix % 2 === 0) {
            return (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: ix * 0.3 }}
                className="project"
                key={ix}
                style={{ border: navSpace ? "1px solid grey" : "0" }}
              >
                <div className="proj-desc rtl">
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-txt">{project.txt}</p>

                  <button>
                    <a href={project.src} target={"_blank"} rel="noreferrer">
                      <span className="react-icon">{AiFillGithub()}</span>{" "}
                      Source
                    </a>
                  </button>
                  <button>
                    <a href={project.demo} target={"_blank"} rel="noreferrer">
                      <span className="react-icon">{ImNewTab()}</span>
                      Demo
                    </a>
                  </button>
                </div>

                <div className="proj-img">
                  <a href={project.img} target={"_blank"} rel="noreferrer">
                    <img src={project.img} alt={project.title} />
                  </a>
                </div>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: ix * 0.3 }}
                className="project"
                key={ix}
                style={{ border: navSpace ? "1px solid grey" : "0" }}
              >
                <div className="proj-img">
                  <a href={project.img} target={"_blank"} rel="noreferrer">
                    <img src={project.img} alt={project.title} />
                  </a>
                </div>

                <div className="proj-desc ltr">
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-txt">{project.txt}</p>

                  <button>
                    <a href={project.src} target={"_blank"} rel="noreferrer">
                      <span className="react-icon">{AiFillGithub()}</span>{" "}
                      Source
                    </a>
                  </button>
                  <button>
                    <a href={project.demo} rel="noreferrer" target={"_blank"}>
                      <span className="react-icon">{ImNewTab()}</span>
                      Demo
                    </a>
                  </button>
                </div>
              </motion.div>
            );
          }
        })}
      </div>
      <h3>
        You can find alot more from practice projects to a following tutorials
        full stack builds on my{" "}
        <a
          href="https://github.com/HassanMostafaa"
          style={{ textDecoration: "underline" }}
        >
          Github
        </a>
      </h3>
    </div>
  );
};
