import { motion, useAnimation } from "framer-motion";
import React, { useState, useRef } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";

export default function Home({ initialFlights }) {
  const containerControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const containerRef = useRef(null);

  const handleCityClick = async () => {
    if (isVisible) {
      await containerControls.start({
        translateY: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      });
      await controls.start({
        translateY: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      });
    } else {
      await containerControls.start({
        translateY: 40,
        transition: { duration: 0.2, ease: "easeInOut" },
      });
      await controls.start({
        translateY: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      });
    }
  };

  const handleTitleClick = async () => {
    setIsVisible(!isVisible);
    await handleCityClick();

    if (isVisible) {
      await controls.start({
        translateY: 0,
        opacity: 0,
        transition: { duration: 0.1, ease: "easeInOut" },
      });
    } else {
      await controls.start({
        opacity: 1,
        height: "auto",
        translateY: 0,
        transition: { duration: 0.1, ease: "easeInOut" },
      });
    }
  };

  const startAnimation = async () => {
    await handleCityClick();
  };

  const toggleVisibility = async () => {
    setIsVisible(!isVisible);
    await handleCityClick();
  };

  return (
    <motion.div
      className={styles.container}
      animate={containerControls}
      ref={containerRef}
    >
      <FlightStatus />
      <div className={styles.statusContainer} onClick={handleTitleClick}>
        {initialFlights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            onClick={handleCityClick}
            isVisible={isVisible}
            handleTitleClick={handleTitleClick}
            controls={controls}
            containerRef={containerRef}
          />
        ))}
      </div>
    </motion.div>
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
