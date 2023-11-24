import { motion } from "framer-motion";
import React from "react";
import { FlightDetails } from "./FlightDetails";

export function FlightInfo({
  city,
  date,
  details,
  handleTitleClick,
  isVisible,
  controls,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        padding: "1rem",
        color: "#7851A9",
      }}
    >
      <div
        onClick={handleTitleClick}
        animate={controls}
        style={{
          padding: "0.6rem",
          backgroundColor: isVisible ? "transparent" : "#b899eb",
          width: "100%",
          cursor: "pointer",
          opacity: 1,
        }}
      >
        <motion.h2
          styles={{
            margin: "0",
            padding: "0",
            cursor: "pointer",
          }}
        >
          {`${city} ${date}`}
        </motion.h2>
      </div>
      <motion.div style={{ overflow: "hidden", opacity: 0 }} animate={controls}>
        <FlightDetails details={details} />
      </motion.div>
    </div>
  );
}
