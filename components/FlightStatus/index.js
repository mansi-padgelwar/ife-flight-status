import React from "react";
import styles from "./FlightStatus.module.css";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { useTranslation } from "next-i18next";

const FlightStatus = ({ flightData }) => {
  return (
    <div className={styles.FlightStatusContainer}>
      <Status flightData={flightData} />
    </div>
  );
};

const Status = ({ flightData }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.StatusContainer}>
      {/* <p className={styles.FlightNumber}>
        {flightData[0]?.current_local_time}: 3pm
      </p> */}
      <FlightPath />
      <p className={styles.StatusTime}>
        15<span style={{ fontWeight: 500 }}>h</span> 30
        <span style={{ fontWeight: 500 }}>min</span>
      </p>
    </div>
  );
};

const FlightPath = () => {
  return (
    <div className={styles.FlightPathContainer}>
      <div className={styles.PlaneContainer}>
        <PiAirplaneTiltFill size={32} className={styles.TiltRight} />
      </div>
      <div className={`${styles.AirportCode} ${styles.SourceCode}`}>DEL</div>
      <div className={`${styles.AirportCode} ${styles.DestinationCode}`}>
        SFO
      </div>
    </div>
  );
};

export default FlightStatus;
