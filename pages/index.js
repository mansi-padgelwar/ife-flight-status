import React, { useState } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";

export default function Home({ initialFlights }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleDetailsExpand = () => {
    setIsVisible(true);
    window.Android && window.Android.triggerExpand();
  };

  const handleDetailsCollapse = () => {
    // console.log("entered");
    // alert("entered");
    setIsVisible(false);
    window.Android && window.Android.triggerCollapse();
  };

  if (typeof window !== "undefined") {
    window.handleDetailsCollapse = handleDetailsCollapse;
  }

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <FlightStatus />
      <div
        className={styles.statusContainer}
        onClick={isVisible ? handleDetailsCollapse : handleDetailsExpand}
      >
        <h1>{isVisible ? "true" : "false"}</h1>
        {initialFlights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            handleClick={
              isVisible ? handleDetailsCollapse : handleDetailsExpand
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
