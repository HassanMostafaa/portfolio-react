import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = () => {
  const [screenPosition, setScreenPosition] = useState(window.scrollY);
  const [showNavMenu, setShowNavMenu] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname.toUpperCase().replace("/", "");

  const [currentPage, setCurrentPage] = useState(currentPath);

  const scrollHandler = () => {
    setScreenPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    console.log(currentPage);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(currentPath);
  }, [location]);

  useEffect(() => {
    screenPosition > 1 ? setShowNavMenu(false) : setShowNavMenu(true);
  }, [screenPosition]);

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <h1>H.</h1>
        </a>
      </div>

      <div className="menu">
        {showNavMenu && (
          <>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
              exit={{ x: 100 }}
              className="nav-link"
            >
              <Link to="/about">Reach Me - </Link>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
              exit={{ x: 100 }}
              className="nav-link"
            >
              <Link to="/Projects">Projects - </Link>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              exit={{ x: 100 }}
              className="nav-link"
            >
              <a
                href="https://drive.google.com/file/d/17N3aYFRv1n6pfyIVJqTDXFNX9lyR6xg-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                CV -
              </a>
            </motion.div>
          </>
        )}
        {!showNavMenu && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="menuIconText">
              <p>{currentPage === "" ? "HOME" : currentPage}</p>
            </div>
            <motion.div className="menuIcon">
              <span></span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
