"use client";
import { useContext } from "react";
import { CountryContext } from "../../context/CountryContext";
import styles from "./NewsNavigation.module.scss";

const NewsNavigation = () => {
  const { country, setCountry } = useContext(CountryContext);

  return (
    <div className={styles.container}>
      <span
        className={`${styles.country} ${
          country === "Company Profile" ? styles.active : ""
        }`}
        onClick={() => setCountry("Company Profile")}
      >
        Company Profile
      </span>
      <span
        className={`${styles.country} ${
          country === "Legal and Regulatory Standing" ? styles.active : ""
        }`}
        onClick={() => setCountry("Legal and Regulatory Standing")}
      >
        Legal and Regulatory Standing
      </span>
      <span
        className={`${styles.country} ${
          country === "Partnerships and Affiliations" ? styles.active : ""
        }`}
        onClick={() => setCountry("Partnerships and Affiliations")}
      >
        Partnerships and Affiliations
      </span>
      <span
        className={`${styles.country} ${
          country === "Standards and Certifications" ? styles.active : ""
        }`}
        onClick={() => setCountry("Standards and Certifications")}
      >
        Standards and Certifications
      </span>
      <span
        className={`${styles.country} ${
          country === "Corporate Responsibility" ? styles.active : ""
        }`}
        onClick={() => setCountry("Corporate Responsibility")}
      >
        Corporate Responsibility
      </span>
    </div>
  );
};

export default NewsNavigation;
