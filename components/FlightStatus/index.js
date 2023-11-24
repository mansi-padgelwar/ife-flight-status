// FlightStatus.js

import React from "react";
import styles from "./FlightStatus.module.css";

const FlightStatus = () => {
  return (
    <div className={styles.FlightStatusContainer}>
      <Status />
    </div>
  );
};

const Status = () => {
  return (
    <div className={styles.StatusContainer}>
      <p className={styles.StatusTime}>Current Local Time: 3:30 am</p>
      <FlightPath />
      <p className={styles.StatusTime}>15h 30m</p>
    </div>
  );
};

const FlightPath = () => {
  return (
    <div className={styles.FlightPathContainer}>
      <div className={`${styles.AirportCode} ${styles.SourceCode}`}>DEL</div>
      <div className={`${styles.AirportCode} ${styles.DestinationCode}`}>
        SFO
      </div>
    </div>
  );
};

export default FlightStatus;
