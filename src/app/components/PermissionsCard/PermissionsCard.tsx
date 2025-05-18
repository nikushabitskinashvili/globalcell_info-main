import styles from "./PermissionsCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const PermissionsCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>Exclusive Permissions & Licenses</span>
        <span className={styles.description}>
          1. On 11.05.2012, according to the decision of the National
          Communications Commission of Georgia #352/24,GlobalCell LLC...
        </span>
        <Link href={"/"}>
          <div className={styles.seeMore}>
            <span className={styles.see}>See more</span>
            <Image src={"/see.svg"} alt="arrow" width={18} height={18} />
          </div>
        </Link>
      </div>
      <Image src={"/license.png"} alt="social" width={570} height={528} />
    </div>
  );
};

export default PermissionsCard;
