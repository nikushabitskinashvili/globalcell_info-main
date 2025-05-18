"use client";

import { CircleFlag } from "react-circle-flags";
import styles from "./Translation.module.scss";
import { useTranslation } from "@/src/i18n";

const Translation = () => {
  const { setLocale, locale } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <CircleFlag
        countryCode="ge"
        className={`${styles.flag} ${locale === "ka" ? styles.selected : ""}`}
        onClick={() => setLocale("ka")}
      />
      <CircleFlag
        countryCode="uk"
        className={`${styles.flag} ${locale === "en" ? styles.selected : ""}`}
        onClick={() => setLocale("en")}
      />
    </div>
  );
};

export default Translation;
