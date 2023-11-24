import React, { useState, useEffect } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";

export default function Home({ initialFlights }) {
  const [isVisible, setIsVisible] = useState(false);

  const expand = () => {
    setIsVisible(true);
    if (window.android && window.android.handleExpand) {
      window.android.handleExpand();
    }
  };

  const collapse = () => {
    setIsVisible(false);
    if (window.android && window.android.handleCollapse) {
      window.android.handleCollapse();
    }
  };

  const handleTitleClick = () => {
    isVisible ? collapse() : expand();
  };

  const handleExpand = () => {
    setIsVisible(true);
    if (window.android && window.android.handleExpand) {
      window.android.handleExpand();
    }
  };

  const handleCollapse = () => {
    setIsVisible(false);
    if (window.android && window.android.handleCollapse) {
      window.android.handleCollapse();
    }
  };

  useEffect(() => {
    window.handleExpand = handleExpand;
    window.handleCollapse = handleCollapse;

    return () => {
      window.handleExpand = null;
      window.handleCollapse = null;
    };
  }, [isVisible]);

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
