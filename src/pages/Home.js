import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { SectionTwo } from "../components/SectionTwo";
import { SectionThree } from "../components/SectionThree";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { About } from "../components/About";

export const Home = () => {
  const navigate = useNavigate();
  const [circleText] = useState(
    "Design • Code • Review • Debug • Code • Review • Debug "
  );
  const [show3dObj, setShow3dObj] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow3dObj(true);
    }, 2500);
  }, []);

  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="slider-wrapper"
          >
            <div className="txt txt1">FRONT-END DEVELOPER</div>
            <div className="txt txt2">FRONT-END DEVELOPER</div>
          </motion.div>

          <header className="hero-content-txt container">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ letterSpacing: "3px" }}
            >
              Hi, I am
            </motion.span>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hassan Mostafa
            </motion.h1>
            <div className="my-details">
              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                I have a diverse set of skills, ranging from design with Figma,
                to logical thinking and problem sovling with Javascript and
                Python. If I am not working on a freelancing gig I am constently
                learning and practicing on personal Projects which I'd love for
                you take a look at on my Github 
              </motion.p> */}
              <motion.div
                className="parent-para"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                I LOVE React.js and with the right Libraries and
                State-Management Systems I can build anything
                <br />
                <p className="secondary-paragraph">
                  Main Skills : React, Redux-Redux/toolkit, Typescript,
                  HTML/CSS, Sass, Nodejs, Express, MongoDB, Git, Firebase, Figma{" "}
                  <br />
                </p>
                <button
                  onClick={() => {
                    window.open("https://github.com/HassanMostafaa", "_blank"); //to open new page
                  }}
                >
                  <p
                    style={{
                      display: "inline-block",
                      transform: "translateY(3px)",
                      margin: "0",
                    }}
                  >
                    {BsGithub()}
                  </p>{" "}
                  &nbsp; Github
                </button>{" "}
                <button
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/17N3aYFRv1n6pfyIVJqTDXFNX9lyR6xg-/view?usp=sharing",
                      "_blank"
                    ); //to open new page
                  }}
                >
                  <p
                    style={{
                      display: "inline-block",
                      transform: "translateY(3px)",
                      margin: "0",
                    }}
                  >
                    <span style={{ color: "white" }}>{ImProfile()}</span>
                  </p>{" "}
                  &nbsp; Resume
                </button>
              </motion.div>
            </div>
          </header>

          <div className="side-footer">
            <p> &copy; By: Hassan Mostafa 2022 </p>
          </div>
        </div>

        <div className="spinning-circle">
          {circleText
            .split("")
            .reverse()
            .map((char, ix) => (
              <span key={ix} style={{ transform: `rotate(-${ix * 6}deg)` }}>
                {char}
              </span>
            ))}

          <div className="laptop">
            {show3dObj && (
              <iframe
                src="https://my.spline.design/noiselightscopy-72899cce544f6215cefa58f237a1d02c/"
                frameBorder={0}
                width="100%"
                title="splineObj"
                height="100%"
              ></iframe>
            )}
          </div>
        </div>
      </div>

      <About />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};
