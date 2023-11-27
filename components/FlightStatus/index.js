// FlightStatus.js

import React from "react";
import styles from "./FlightStatus.module.css";
import { PiAirplaneTiltFill } from "react-icons/pi";

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
      <p className={styles.FlightNumber}>AI 173/B 777</p>
      <FlightPath />
      <p className={styles.StatusTime}>15h 30m</p>
    </div>
  );
};

const FlightPath = () => {
  return (
    <div className={styles.FlightPathContainer}>
      <PiAirplaneTiltFill size={32} />
      <div className={`${styles.AirportCode} ${styles.SourceCode}`}>DEL</div>
      <div className={`${styles.AirportCode} ${styles.DestinationCode}`}>
        SFO
      </div>
    </div>
  );
};

export default FlightStatus;
