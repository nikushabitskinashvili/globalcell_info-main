import styles from "./MiniGreenCard.module.scss";
import Image from "next/image";

const MiniGreenCard = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Green Policy</span>
      <Image src="/green.png" alt="green" width={283} height={250} />
      <div className={styles.info}>
        <span className={styles.description}>
          Since its establishment, one of the main activities of GlobalCell (in
          addition to its main activity) is to participate in various social,
          charitable, educational, cultural...
        </span>
        <div className={styles.seeMore}>
          <span className={styles.see}>See more</span>
          <Image src={"/see.svg"} alt="arrow" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default MiniGreenCard;
