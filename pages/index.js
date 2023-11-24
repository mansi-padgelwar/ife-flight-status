import React, { useState, useEffect } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";

export default function Home({ initialFlights }) {
  const [isVisible, setIsVisible] = useState(false);

  const expand = () => {
    setIsVisible(true);
    if (window.android && window.android.handleDetailsExpand) {
      window.android.handleDetailsExpand();
    }
  };

  const collapse = () => {
    setIsVisible(false);
    if (window.android && window.android.handleDetailsCollapse) {
      window.android.handleDetailsCollapse();
    }
  };

  const handleDetailsExpand = () => {
    expand();
  };

  const handleDetailsCollapse = () => {
    collapse();
  };

  useEffect(() => {
    window.handleDetailsExpand = handleDetailsExpand;
    window.handleDetailsCollapse = handleDetailsCollapse;

    return () => {
      window.handleDetailsExpand = null;
      window.handleDetailsCollapse = null;
    };
  }, [isVisible]);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <FlightStatus />
      <div
        className={styles.statusContainer}
        onClick={isVisible ? handleDetailsCollapse : handleDetailsExpand}
      >
        {initialFlights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            onClick={isVisible ? handleDetailsCollapse : handleDetailsExpand}
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
