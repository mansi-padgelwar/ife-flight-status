import React from "react";
import styles from "./CustomComponent.module.css";
import { useTranslation } from "next-i18next";

const CustomComponent = ({ title, subtitle }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h4 className={styles.title}> {t(`${title}`)}</h4>
      <h6 className={styles.subtitle}>{t(`${subtitle}`)}</h6>
    </div>
  );
};

export default CustomComponent;
