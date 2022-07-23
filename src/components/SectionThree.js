import React from "react";
import { ImProfile } from "react-icons/im";
export const SectionThree = ({ navSpace }) => {
  return (
    <>
      <div
        className="section3"
        style={{ padding: navSpace ? "200px 10%" : "50px 10%" }}
      >
        <div className="info">
          <h1>Get In Touch</h1>{" "}
          <p>
            <a
              href="mailto:hassan.mostafa2251@gmail.com"
              rel="noreferrer"
              target={"_blank"}
            >
              hassan.mostafa2251@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+201142477195" rel="noreferrer" target={"_blank"}>
              +201142477195
            </a>
          </p>
          <p>Egypt, Cairo, Obour City Second District</p>
        </div>

        <div className="info">
          <h1>Socials</h1>
          <a
            href="https://www.linkedin.com/in/hassanmostafaa/"
            rel="noreferrer"
            target={"_blank"}
          >
            Linkedin
          </a>
          &nbsp;- &nbsp;
          <a
            href="https://github.com/HassanMostafaa"
            rel="noreferrer"
            target={"_blank"}
          >
            Github
          </a>
          &nbsp; - &nbsp;
          <a
            href="https://www.facebook.com/HassanM0stafa/"
            rel="noreferrer"
            target={"_blank"}
          >
            Facebook
          </a>
        </div>

        <div className="info">
          <h1>More Info</h1>
          <a
            href="https://drive.google.com/file/d/1-5Q30O-qPWUh9uUV2oNT2hkAuF-Ln3JD/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            {ImProfile()} CV Donwload
          </a>
        </div>
      </div>
    </>
  );
};
