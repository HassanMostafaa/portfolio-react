import React, { useEffect } from "react";
import { Certificate } from "./Certificate";
import { Link } from "react-router-dom";

export const Certificates = ({ slice }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = [
    {
      platform: "Udacity ",
      img: "./images/certificates/png/udacityFRONTEND.png",
      title: "Front-End Development Advanced Nanodegree Program",
      desc: "Master SQL and Data Modeling for the web, and learn how to use APIs, including best practices for API testing with React.js, Node, Express, and Redux",
      link: "https://confirm.udacity.com/GRD4AEFY",
    },
    {
      platform: "IBM",
      img: "./images/certificates/png/ibm/IBMReact.png",
      title: "React and ECMAScript",
      desc: "Covering modern ReactJS with hooks and functional componenets and legacy Class components and life cycle with different Ecmascript versions",
      link: "https://drive.google.com/file/d/1744jejoyNsTOnGHEZCZo77eJ6XKIdLaF/view?usp=sharing",
    },
    {
      platform: "Coursera",
      img: "./images/certificates/png/COURS/couseraJS.png",
      title: "Modern Javascript, ES6",
      desc: "Covered ES6 syntax and rules, authorized by Coursera Project Network and offered through Coursera",
      link: "https://drive.google.com/file/d/1y8DDeu_fcvalS3VeRPSfXHQM6NI38sKG/view?usp=sharing",
    },
    {
      platform: "Google's DSC",
      img: "./images/certificates/png/googleDSCApper.png",
      title: "DSC Founder Core Team Certificate",
      desc: "For participating in creating Google's Developer Student Club Egypt in New Cairo Academy",
      link: "https://drive.google.com/file/d/1B5IF126zCH0trM3UOTtSo8vc8pjQvf6v/view?usp=sharing",
    },

    {
      platform: "Coursera",
      img: "./images/certificates/png/COURS/COURSERApython.png",
      title: "Python, Flask",
      desc: "Create Your First Web App with Python and Flask",
      link: "https://drive.google.com/file/d/1vK6ciNppIFk4HKMBF02EaVgVHkYpkJe_/view?usp=sharing",
    },
    {
      platform: "Coursera",
      img: "./images/certificates/png/COURS/CourseraFigma.png",
      title: "Getting Started with Figma",
      desc: "Figma is a vector graphics editor and prototyping tool which is primarily web-based",
      link: "https://drive.google.com/file/d/1CwJqfwEEUokhvFJzHKh6wjhxinIM1O-9/view?usp=sharing",
    },

    {
      platform: "IBM",
      img: "./images/certificates/png/ibm/ibmJS.png",
      title: "Javascript",
      desc: "Covering Javascript as a programming language that is one of the core technologies of the World Wide Web",
      link: "https://drive.google.com/file/d/1Dg_WjC3hCt2jprOMxQRLSAXUSYl6GO_p/view?usp=sharing",
    },
    {
      platform: "Linkedin Learning",
      img: "./images/certificates/png/LINKEDIN/JS.png",
      title: "Javascript",
      desc: "Covering Javascript as a programming language that is one of the core technologies of the World Wide Web",
      link: "https://drive.google.com/file/d/1zgaUdpobs6epybFDqYj0s_hWc-hhmy6L/view?usp=sharing",
    },
    {
      platform: "Udemy",
      img: "./images/certificates/png/udemy/udemyReact.png",
      title: "Modern React and Redux",
      desc: "Covering modern React.js with functional components and Redux as an open-source JavaScript library for managing and centralizing application state",
      link: "https://drive.google.com/file/d/1g7Oio-9RgdjYzTMh_u7UWXGTVFDw7Ndu/view?usp=sharing",
    },
  ];
  return (
    <div
      className="certificates-area "
      style={{ padding: !slice ? "200px 0" : "50px 0" }}
    >
      <div className="cert-title">
        {slice ? (
          <Link
            style={{
              float: "right",
              transform: "translateY(-20px)",
              textDecoration: "underline",
            }}
            to="/certificates"
          >
            See More →
          </Link>
        ) : (
          <Link style={{ float: "right" }} to="/">
            ← Home
          </Link>
        )}
        <h1>Achievements / Certificates</h1>
      </div>
      <div className="cert-desc">
        <p>Some of the courses I am proud of</p>
      </div>
      <div className="certificates container">
        {slice
          ? certificates
              .slice(0, 4)
              .map((certificate, ix) => (
                <Certificate key={ix} certificate={certificate} />
              ))
          : certificates.map((certificate, ix) => (
              <Certificate key={ix} certificate={certificate} ix={ix} />
            ))}
      </div>
    </div>
  );
};
