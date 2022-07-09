import React from "react";
import { ImNewTab } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
export const SectionTwo = () => {
  const projects = [
    {
      img: "./images/projects/blueCircle/Screenshot_2.png",
      title: "Blue Circle",
      txt: " Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "",
      demo: "",
    },
    {
      img: "./images/projects/weatherAp/Screenshot_2.png",
      title: "Weather App",
      txt: "Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "",
      demo: "",
    },
    {
      img: "./images/projects/DASHBO/Screenshot_1.png",
      title: "Dashboard",
      txt: "Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "",
      demo: "",
    },
    {
      img: "./images/projects/ACTIVITYFEED/screencapture-hassanmostafaa-github-io-activityFeed-2022-07-08-10_10_44.png",
      title: "Actifity Feed",
      txt: "Just a design focused page build with basic HTML/CSS and VanillaJavascript",
      src: "",
      demo: "",
    },
  ];
  return (
    <div className="section2">
      <h1 className="sectionTitle">Projects</h1>
      <p className="sectionDesc">Things that I am proud of</p>
      <div className="projects">
        {projects.map((project, ix) => {
          if (ix % 2 === 0) {
            return (
              <div className="project" key={ix}>
                <div className="proj-desc rtl">
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-txt">{project.txt}</p>

                  <button>
                    <a href={project.src}>
                      <span className="react-icon">{AiFillGithub()}</span>{" "}
                      Source
                    </a>
                  </button>
                  <button>
                    <a href={project.demo}>
                      <span className="react-icon">{ImNewTab()}</span>
                      Demo
                    </a>
                  </button>
                </div>

                <div className="proj-img">
                  <a href={project.img} target={"_blank"}>
                    <img src={project.img} alt={project.title} />
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div className="project" key={ix}>
                <div className="proj-img">
                  <a href={project.img} target={"_blank"}>
                    <img src={project.img} alt={project.title} />
                  </a>
                </div>

                <div className="proj-desc ltr">
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-txt">{project.txt}</p>

                  <button>
                    <a href={project.src}>
                      <span className="react-icon">{AiFillGithub()}</span>{" "}
                      Source
                    </a>
                  </button>
                  <button>
                    <a href={project.demo}>
                      <span className="react-icon">{ImNewTab()}</span>
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
