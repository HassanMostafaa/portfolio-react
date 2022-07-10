import React, { useEffect } from "react";
import { About } from "../components/About";
import { SectionThree } from "../components/SectionThree";
import "../styles/AboutPage.scss";

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing-page">
      <SectionThree navSpace={true} />
      <About />
    </div>
  );
};
