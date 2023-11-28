import React, { useState } from "react";
import "../app/globals.css";
import styles from "./styles/Home.module.css";
import FlightStatus from "../components/FlightStatus";
import FlightInfo from "../components/FlightInfo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home({ initialFlights }) {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState("en");
  const [selectedFlights, setSelectedFlights] = useState(initialFlights[0]?.en);

  const handleLanguage = (lang) => {
    setLanguage(lang);
    switchLanguage(lang);
  };

  const switchLanguage = (lang) => {
    const selectedLanguageFlights = initialFlights.find(
      (flight) => flight[lang]
    );

    if (selectedLanguageFlights) {
      setSelectedFlights(selectedLanguageFlights[lang]);
    }
  };

  if (typeof window !== "undefined") {
    window.handleLanguage = handleLanguage;
  }

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      {/* <button onClick={() => handleLanguage("en")}>English</button>
      <button onClick={() => handleLanguage("hi")}>Hindi</button>
      <button onClick={() => handleLanguage("es")}>es</button> */}

      <FlightStatus flightData={selectedFlights} />
      <div className={styles.statusContainer}>
        {selectedFlights?.map((flight, index) => (
          <FlightInfo
            key={index}
            {...flight}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

export async function getServerSideProps({ req, locale }) {
  const res = await fetch(`http://${req.headers.host}/api/flights`);
  const flights = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      initialFlights: flights,
    },
  };
}
