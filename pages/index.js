import React, { useState, useEffect } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";

export default function Home({ initialFlights }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleDetailsExpand = () => {
    setIsVisible(true);
  };

  const handleDetailsCollapse = () => {
    setIsVisible(false);
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <FlightStatus />
      <div
        className={styles.statusContainer}
        onClick={
          isVisible
            ? () => {
                handleDetailsCollapse();
                window.Android && window.Android.triggerCollapse();
              }
            : () => {
                handleDetailsExpand();
                window.Android && window.Android.triggerExpand();
              }
        }
      >
        {initialFlights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            onClick={
              isVisible
                ? () => {
                    handleDetailsCollapse();
                    window.Android && window.Android.triggerCollapse();
                  }
                : () => {
                    handleDetailsExpand();
                    window.Android && window.Android.triggerExpand();
                  }
            }
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
