import React from "react";
import { ImProfile } from "react-icons/im";
export const SectionThree = () => {
  return (
    <div className="section3">
      <div className="info">
        <h1>Get In Touch</h1> <p> hassan.mostafa2251@gmail.com</p>
        <p>+201142477195</p>
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
          href="https://drive.google.com/file/d/17N3aYFRv1n6pfyIVJqTDXFNX9lyR6xg-/view?usp=sharing"
          target={"_blank"}
          rel="noreferrer"
        >
          {ImProfile()} CV Donwload
        </a>
      </div>
    </div>
  );
};
