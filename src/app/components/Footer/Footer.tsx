"use client";

import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { useTranslation } from "@/src/i18n";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.infoWrapper}>
            <Image
              src={"/footerlogo.svg"}
              width={169}
              height={34}
              alt="footerlogo"
            />
            <div className={styles.socialMedia}>
              <Link href="/">
                <Image
                  src={"/linkedin.svg"}
                  width={24}
                  height={24}
                  alt="linkedin"
                />
              </Link>
              <Link href="/">
                <Image src={"/insta.svg"} width={24} height={24} alt="insta" />
              </Link>
              <Link href="/">
                <Image src={"/fb.svg"} width={24} height={24} alt="fb" />
              </Link>
              <Link href="/">
                <Image
                  src={"/youtube.svg"}
                  width={24}
                  height={24}
                  alt="youtube"
                />
              </Link>
              <Link href="/">
                <Image src={"/x.svg"} width={24} height={24} alt="x" />
              </Link>
              <Link href="/">
                <Image
                  src={"/tiktok.svg"}
                  width={24}
                  height={24}
                  alt="tiktok"
                />
              </Link>
              <Link href="/">
                <Image
                  src={"/whatsapp.svg"}
                  width={24}
                  height={24}
                  alt="whatsapp"
                />
              </Link>
              <Link href="/">
                <Image
                  src={"/telegram.svg"}
                  width={24}
                  height={24}
                  alt="telegram"
                />
              </Link>
              <Link href="/">
                <Image
                  src={"/signal.svg"}
                  width={24}
                  height={24}
                  alt="signal"
                />
              </Link>
              <Link href="/">
                <Image src={"/viber.svg"} width={24} height={24} alt="viber" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navWrapper}>
          <div className={styles.nav}>
            <span className={styles.navHeadline}>Globalcell Info</span>
            <div className={styles.navInfo}>
              <span className={styles.navInfoText}>About us</span>
              <span className={styles.navInfoText}>Mission & Vision</span>
              <span className={styles.navInfoText}>Social Responsibility</span>
            </div>
          </div>
          <div className={styles.nav}>
            <span className={styles.navHeadline}>Globalcell eSIM</span>
            <div className={styles.navInfo}>
              <Link
                href="https://globalcell.ge"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.ge
              </Link>
              <Link
                href="https://globalcell.eu"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.eu
              </Link>
              <Link
                href="https://globalcell.asia"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.asia
              </Link>
              <Link
                href="https://globalcell.africa"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.africa
              </Link>
              <Link
                href="https://globalcell.us"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.us
              </Link>
            </div>
          </div>
          <div className={styles.nav}>
            <span className={styles.navHeadline}>Globalcell</span>
            <div className={styles.navInfo}>
              <Link
                href="https://globalcell.news"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.news
              </Link>
              <Link
                href="https://globalcell.staff"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.staff
              </Link>
              <Link
                href="https://globalcell.club"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.club
              </Link>
              <Link
                href="https://globalcell.vas"
                target="_blank"
                className={styles.navInfoText}
              >
                Globalcell.VAS
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.license}>
        <span className={styles.licenseText}>
          &copy; {t("allrightsreserved")}
        </span>
        <div className={styles.terms}>
          <Link href="https://globalcell.ge/terms-and-conditions">
            <span className={styles.licenseText}>
              {t("terms & conditions")}
            </span>
          </Link>
          <Link href="https://globalcell.ge/cookie-policy">
            <span className={styles.licenseText}>{t("cookie policy")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
