import styles from "./Hero.module.scss";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroInfo}>
          <div className={styles.heroInfoWrapper}>
            <Image
              src="/country.png"
              alt="country"
              width={314}
              height={219}
              className={styles.mobileImage}
            />
            <span className={styles.heroTitle}>
              eSIM for <span className={styles.countryName}>Georgia</span> Stay
              Connected Instantly
            </span>

            <Image
              src="/country.png"
              alt="country"
              width={314}
              height={219}
              className={styles.tabletImage}
            />
          </div>
          <span className={styles.heroDescription}>
            Buy a prepaid eSIM and enjoy fast 4G/5G coverage in Georgia. No
            contracts or hidden fees
          </span>
          <span className={styles.button}>Get Your eSIM for Georgia</span>{" "}
        </div>
        <Image
          src="/country.png"
          alt="country"
          width={537}
          height={341}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Hero;
