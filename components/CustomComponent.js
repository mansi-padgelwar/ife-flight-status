import React from "react";

const CustomComponent = ({ title, subtitle }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "0",
        padding: "0",
      }}
    >
      <h4
        style={{
          margin: "0",
          padding: "0",
          fontWeight: "400",
          fontSize: "1.3rem",
        }}
      >
        {title}
      </h4>
      <h6
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          margin: "0",
          padding: "0.4rem 0 ",
        }}
      >
        {subtitle}
      </h6>
    </div>
  );
};

export default CustomComponent;
