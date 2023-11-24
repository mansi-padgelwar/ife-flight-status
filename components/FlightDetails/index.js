// FlightDetails.jsx
import React from "react";
import styles from "./FlightDetails.module.css"; // Import the CSS module
import CustomComponent from "../CustomComponent";

const FlightDetails = ({ details }) => {
  return (
    <div className={styles.flightDetailsContainer}>
      {details?.map(({ title, subtitle }) => (
        <CustomComponent key={title} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
};

export default FlightDetails;
