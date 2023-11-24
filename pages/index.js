import React, { useState, useEffect } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";

export default function Home({ initialFlights }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleTitleClick = () => {
    setIsVisible(!isVisible);
    // Call the exposed function
    if (window.android && window.android.handleTitleClick) {
      window.android.handleTitleClick();
    }
  };

  useEffect(() => {
    // Expose the function to the global scope
    window.handleTitleClick = handleTitleClick;

    // Cleanup function to remove the global function when the component unmounts
    return () => {
      window.handleTitleClick = null;
    };
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <FlightStatus />
      <div className={styles.statusContainer} onClick={handleTitleClick}>
        {initialFlights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            onClick={handleTitleClick}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const res = await fetch(`http://${req.headers.host}/api/flights`);
  const flights = await res.json();

  return {
    props: {
      initialFlights: flights,
    },
  };
}
