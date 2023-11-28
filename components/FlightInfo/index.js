import React from "react";
import styles from "./FlightInfo.module.css"; // Import the CSS module
import FlightDetails from "../FlightDetails";
import { useTranslation } from "next-i18next";

const FlightInfo = ({ city, date, details, isVisible, setIsVisible }) => {
  const { t } = useTranslation();
  const handleDetailsExpand = () => {
    setIsVisible(true);

    if (window.Android) {
      window.Android.triggerExpand();
    } else {
      console.error("window.Android is not defined");
    }
  };

  const handleDetailsCollapse = () => {
    setIsVisible(false);
    if (window.Android) {
      window.Android.triggerCollapse();
    } else {
      console.error("window.Android is not defined");
    }
  };

  const handleCollapseFromAndroid = () => {
    setIsVisible(false);
  };

  if (typeof window !== "undefined") {
    if (isVisible) {
      window.handleCollapseFromAndroid = handleCollapseFromAndroid;
    }
  }

  return (
    <div className={styles.container}>
      <div
        onClick={isVisible ? handleDetailsCollapse : handleDetailsExpand}
        className={`${styles.titleContainer} ${
          isVisible ? "" : styles.activeTitle
        }`}
      >
        <h2 className={styles.title}>
          {/* {t(`${city}`)} */}
          {city}
          {", "}
          <span style={{ fontWeight: 500, fontSize: "1rem" }}>
            {/* {t(`${date}`)} */}
            {date}
          </span>
        </h2>
      </div>
      <div
        className={`${styles.detailsContainer} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <FlightDetails details={details} />
      </div>
    </div>
  );
};

export default FlightInfo;
