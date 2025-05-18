import styles from "./SocialCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const SocialCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>Social Responsibility</span>
        <span className={styles.description}>
          Since its establishment, one of the main activities of GlobalCell (in
          addition to its main activity) is to participate in various social,
          charitable, educational, cultural and incentive projects. GlobalCell
          has implemented (or participated in) dozens of similar activities
          and.....
        </span>
        <Link href={"/"}>
          <div className={styles.seeMore}>
            <span className={styles.see}>See more</span>
            <Image src={"/see.svg"} alt="arrow" width={18} height={18} />
          </div>
        </Link>
      </div>
      <Image src={"/social.png"} alt="social" width={570} height={528} />
    </div>
  );
};

export default SocialCard;
