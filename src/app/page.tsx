"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import CoreValues from "./components/CoreValues/CoreValues";
import Footer from "./components/Footer/Footer";
import { useTranslation } from "../i18n";
import SocialCard from "./components/SocialCard/SocialCard";
import GreenCard from "./components/GreenCard/GreenCard";
import PermissionsCard from "./components/PermissionsCard/PermissionsCard";
import Partnership from "./components/Partnership/Partnership";
export default function Home() {
  const { t, locale } = useTranslation();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>About Us</span>
              <span className={styles.description}>
                Your Trusted eSIM Partner Across Georgia, UK, USA, Israel,
                Europe, and Asia
              </span>
            </div>
          </div>
        </div>
        <div className={styles.whoWeAreWrapper}>
          <WhoWeAre />
        </div>
        <CoreValues />
        <SocialCard />
        <GreenCard />
        <PermissionsCard />
        <Partnership />
      </div>
    </>
  );
}
