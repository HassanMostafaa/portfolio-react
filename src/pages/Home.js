import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { Projects } from "../components/Projects";
import { SectionThree } from "../components/SectionThree";
import { ImProfile } from "react-icons/im";
import { About } from "../components/About";
import Spline from "@splinetool/react-spline";

export const Home = () => {
  const [circleText] = useState(
    "Design • Code • Review • Debug • Code • Review • Debug "
  );
  const [show3dObj, setShow3dObj] = useState(false);
  useEffect(() => {
    setShow3dObj(true);
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
              transition={{ duration: 1, delay: 1.5 }}
              style={{ letterSpacing: "3px" }}
            >
              Hi, I am
            </motion.span>
            <motion.h1
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              Hassan Mostafa
            </motion.h1>
            <div className="my-details">
              <motion.div
                className="parent-para"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                I am a Front-End Developer with an eye for beautiful design and
                clean code. I LOVE React.js and with the right Libraries and
                State-Management Systems I can build anything
                <br />
                <motion.p
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="secondary-paragraph"
                >
                  Main Skills : React, Redux-Redux/toolkit, Typescript,
                  HTML/CSS, Sass, Nodejs, Express, MongoDB, Git, Firebase, Figma{" "}
                  <br />
                </motion.p>
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

        <motion.div
          className="spinning-circle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {circleText
            .split("")
            .reverse()
            .map((char, ix) => (
              <span key={ix} style={{ transform: `rotate(-${ix * 6}deg)` }}>
                {char}
              </span>
            ))}

          <div className="laptop">
            {/* {show3dObj && (
              <iframe
                src="https://my.spline.design/noiselightscopy-72899cce544f6215cefa58f237a1d02c/"
                frameBorder={0}
                width="100%"
                title="splineObj"
                height="100%"
              ></iframe>
            )} */}
            {show3dObj && (
              <Spline scene="https://prod.spline.design/SOMjRPCzmhEvDyAw/scene.splinecode" />
            )}
          </div>
        </motion.div>
      </div>

      <About />
      <Projects navSpace={false} />
      <SectionThree navSpace={false} />
    </div>
  );
};
