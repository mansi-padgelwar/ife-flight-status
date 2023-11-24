import FlightStatus from "../components/FlightStatus";
import { flights } from "../data/flights";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { FlightInfo } from "../components/FlightInfo";
import "../app/globals.css";

export default function Home({ initialFlights }) {
  const containerControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const handleCityClick = async () => {
    if (isVisible) {
      await containerControls.start({
        translateY: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
      await controls.start({
        translateY: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
    } else {
      await containerControls.start({
        translateY: 40,
        transition: { duration: 1, ease: "easeInOut" },
      });
      await controls.start({
        translateY: 0,
        transition: { duration: 1, ease: "easeInOut" },
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

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1rem",
        transition: "all 0.5s ease",
        color: "#7851A9",

        "@media (min-width: 768px)": {
          margin: "2rem", // Tablet styles
        },

        "@media (min-width: 1024px)": {
          margin: "4rem", // Desktop styles
        },
      }}
      animate={containerControls}
    >
      <FlightStatus />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        onClick={handleTitleClick}
      >
        {flights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            onClick={handleCityClick}
            isVisible={isVisible}
            handleTitleClick={handleTitleClick}
            controls={controls}
          />
        ))}
      </div>
    </motion.div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/flights");
//   const flights = await res.json();

//   return {
//     props: {
//       initialFlights: flights,
//     },
//   };
// }
