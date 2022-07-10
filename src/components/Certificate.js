import React from "react";
import { motion } from "framer-motion";
export const Certificate = ({ certificate, ix }) => {
  const { platform, img, title, desc, link } = certificate;

  return (
    <motion.div
      className="certificate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: ix * 0.3 }}
    >
      <div>
        <h2 className="cert-platform">{platform}</h2>
        <div className="cert-img">
          <a href={img} target="_blank" rel="noreferrer">
            <img src={img} alt={title} />
          </a>
        </div>

        <div className="cert-txt">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <button onClick={() => window.open(link, "_blank")}>
        PDF Certificate Link
      </button>
    </motion.div>
  );
};
