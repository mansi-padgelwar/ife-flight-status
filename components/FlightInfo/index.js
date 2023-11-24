// FlightInfo.js

import { motion } from "framer-motion";
import React from "react";
import styles from "./FlightInfo.module.css"; // Import the CSS module
import FlightDetails from "../FlightDetails";

const FlightInfo = ({
  city,
  date,
  details,
  handleTitleClick,
  isVisible,
  controls,
}) => {
  return (
    <div className={styles.container}>
      <div
        onClick={handleTitleClick}
        animate={controls}
        className={`${styles.titleContainer} ${
          isVisible ? "" : styles.activeTitle
        }`}
      >
        <motion.h2 className={styles.title}>{`${city} ${date}`}</motion.h2>
      </div>
      <motion.div className={styles.detailsContainer} animate={controls}>
        <FlightDetails details={details} />
      </motion.div>
    </div>
  );
};

export default FlightInfo;
