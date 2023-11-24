import React from "react";

const FlightStatus = () => {
  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <Status />
    </div>
  );
};

const Status = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "1.3rem",
          paddingBottom: "0.5rem",
          "@media (max-width: 768px)": {
            fontSize: "0.7rem",
          },
        }}
      >
        Current Local Time: 3:30 am
      </p>
      <FlightPath />
      <p
        style={{
          fontSize: "1.3rem",
          margin: 0,
          padding: 0,
          "@media (max-width: 768px)": {
            fontSize: "0.7rem",
          },
        }}
      >
        15h 30m
      </p>
    </div>
  );
};

const FlightPath = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        height: "50px",
        borderRadius: "50%",
        borderTopWidth: "1.5px",
        borderTopColor: "black",
        borderTopStyle: "solid",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          "@media (max-width: 768px)": {
            fontSize: "0.9rem",
          },
        }}
      >
        DEL
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          right: "-10%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          "@media (max-width: 768px)": {
            fontSize: "0.9rem",
          },
        }}
      >
        SFO
      </div>
    </div>
  );
};

export default FlightStatus;
