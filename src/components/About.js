import React from "react";

export const About = () => {
  return (
    <div className="about ">
      <div className="container">
        <div className="about-content">
          <h1 className="title">About Me</h1>
          <p className="desc">
            I have a diverse set of skills, ranging from design with Figma, to
            logical thinking and problem sovling with Javascript and Python. If
            I am not working on a freelancing gig I am constently learning and
            practicing on personal Projects which I'd love for you take a look
            at on my Github
          </p>
          <div className="btn-div">
            {" "}
            <a
              href="https://github.com/HassanMostafaa"
              target={"_blank"}
              className="btn"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
