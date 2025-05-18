import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./BurgerMenu.module.scss";
import Image from "next/image";

const BurgerMenu = ({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: (value: boolean) => void;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 10);
  }, []);

  return (
    <div className={`${styles.wrapper} ${animate ? styles.slideIn : ""}`}>
      <div className={styles.image} onClick={() => toggleMenu(false)}>
        <Image src="/burgeropened.svg" alt="burger" width={24} height={24} />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image src="/logo.svg" alt="logo" width={157} height={24} />
          <div className={styles.navWrapper}>
            <div className={styles.navInfo}>
              <span className={styles.navHeadline}>Globalcell eSIM</span>
              <div className={styles.nav}>
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
            <div className={styles.navInfo}>
              <span className={styles.navHeadline}>Globalcell</span>
              <div className={styles.nav}>
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
            <div className={styles.socialMedia}>
              <Link
                href="https://www.linkedin.com/company/globalcell-group/"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.instagram.com/globalcell" target="_blank">
                <Image src="/insta.svg" alt="insta" width={24} height={24} />
              </Link>
              <Link href="https://www.facebook.com/globalcell" target="_blank">
                <Image src="/fb.svg" alt="fb" width={24} height={24} />
              </Link>
              <Link href="https://www.youtube.com/globalcell" target="_blank">
                <Image
                  src="/youtube.svg"
                  alt="youtube"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com/globalcell" target="_blank">
                <Image src="/x.svg" alt="x" width={24} height={24} />
              </Link>
              <Link href="https://www.tiktok.com/@globalcell" target="_blank">
                <Image src="/tiktok.svg" alt="tiktok" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.license}>
          <Link href="https://globalcell.ge/terms-and-conditions">
            <span className={styles.licenseText}>Terms & Conditions</span>
          </Link>
          <Link href="https://globalcell.ge/cookie-policy">
            <span className={styles.licenseText}>Cookie Policy</span>
          </Link>
        </div>
        <div className={styles.mobileWrapper}>
          <span className={styles.mobileText}>You can also find us</span>
          <div className={styles.mobile}>
            <Image src="/appstore.png" alt="appstore" width={133} height={35} />
            <Image
              src="/googleplay.png"
              alt="googleplay"
              width={133}
              height={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
