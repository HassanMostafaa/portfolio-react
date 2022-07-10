import React, { useEffect } from "react";
import { Projects } from "../components/Projects";

export const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing-page">
      <Projects navSpace={true} />
    </div>
  );
};
