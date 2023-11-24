import CustomComponent from "./CustomComponent";
import React from "react";

export function FlightDetails({ details }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "2rem",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "1rem",
        
      }}
    >
      {details.map(({ title, subtitle }) => (
        <CustomComponent key={title} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
}
