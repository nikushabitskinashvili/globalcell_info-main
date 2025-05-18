"use client";
import Translation from "../Translation/Translation";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {!isMenuOpen && (
        <div className={styles.container}>
          <div className={styles.navigation}>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={186} height={30} />
            </Link>
            <div className={styles.navInfo}>
              <span
                className={`${
                  pathname === "/" ? styles.active : styles.navLink
                }`}
              >
                About Us
              </span>
              <span
                className={` ${
                  pathname === "/mission-vision" ? styles.active : styles.navLink
                }`}
              >
                Mission & Vision
              </span>
              <Link
                href="/responsibility"
                className={` ${
                  pathname === "/responsibility" ? styles.active : styles.navLink
                }`}
              >
                Social Responsibility
              </Link>
            </div>
          </div>
          <div className={styles.info}>
            <Translation />
            <div className={styles.burger} onClick={() => setIsMenuOpen(true)}>
              <Image src="/burger.svg" alt="burger" width={24} height={24} />
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className={styles.fullscreenMenu}>
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
        </div>
      )}
    </>
  );
};

export default Header;
