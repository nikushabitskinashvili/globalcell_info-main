import styles from "./MiniPermissionsCard.module.scss";
import Image from "next/image";

const MiniPermissionsCard = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Exclusive Permissions & Licenses</span>
      <Image src="/social.png" alt="social" width={283} height={250} />
      <div className={styles.info}>
        <span className={styles.description}>
          On 11.05.2012, according to the decision of the National
          Communications Commission of Georgia #352/24,GlobalCell LLC...
        </span>
        <div className={styles.seeMore}>
          <span className={styles.see}>See more</span>
          <Image src={"/see.svg"} alt="arrow" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default MiniPermissionsCard;
