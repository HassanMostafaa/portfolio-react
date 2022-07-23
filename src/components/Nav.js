import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [screenPosition, setScreenPosition] = useState(window.scrollY);
  const [showNavMenu, setShowNavMenu] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "") || "";

  const [currentPage, setCurrentPage] = useState(currentPath);

  const scrollHandler = () => {
    setScreenPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(currentPath);
  }, [location, currentPath]);

  useEffect(() => {
    screenPosition > 1 ? setShowNavMenu(false) : setShowNavMenu(true);
  }, [screenPosition]);

  return (
    <nav className={showNavMenu ? "blurBg" : ""}>
      <div className="logo">
        <Link to="/">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            H.
          </motion.h1>
        </Link>
      </div>

      <div className="menu">
        <AnimatePresence>
          {showNavMenu && (
            <div className="links">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, type: "spring" }}
                exit={{ x: 100, opacity: 0 }}
                key="link1"
                className="nav-link"
              >
                <Link to="/about">Reach Me</Link>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
                exit={{ x: 100, opacity: 0 }}
                className="nav-link"
                key="link2"
              >
                <Link to="/projects">Projects</Link>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3, type: "spring" }}
                exit={{ x: 100, opacity: 0 }}
                key="link3"
                className="nav-link"
              >
                <a
                  href="https://drive.google.com/file/d/1-5Q30O-qPWUh9uUV2oNT2hkAuF-Ln3JD/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!showNavMenu && (
            <div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                key="link4"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="menuIconText">
                  <p style={{ textTransform: "capitalize " }}>
                    {currentPage === "" ? "Home" : currentPage}
                  </p>
                </div>
                <motion.div
                  className="menuIcon"
                  onClick={() => {
                    setShowNavMenu(true);
                  }}
                >
                  <span></span>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
