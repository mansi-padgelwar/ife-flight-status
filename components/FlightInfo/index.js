// FlightInfo.js

import React from "react";
import styles from "./FlightInfo.module.css"; // Import the CSS module
import FlightDetails from "../FlightDetails";

const FlightInfo = ({ city, date, details, handleTitleClick, isVisible }) => {
  return (
    <div className={styles.container}>
      <div
        onClick={handleTitleClick}
        className={`${styles.titleContainer} ${
          isVisible ? "" : styles.activeTitle
        }`}
      >
        <h2 className={styles.title}>{`${city} ${date}`}</h2>
      </div>
      <div
        className={`${styles.detailsContainer} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <FlightDetails details={details} />
      </div>
    </div>
  );
};

export default FlightInfo;
