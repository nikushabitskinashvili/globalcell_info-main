import Link from "next/link";
import styles from "./GreenCard.module.scss";
import Image from "next/image";

const GreenCard = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={"/green.png"} alt="green" width={570} height={528} />
      <div className={styles.container}>
        <span className={styles.title}>Green Policy</span>
        <span className={styles.description}>
          GlobalCell LLC, founded in 2009, is a Georgian telecom operator
          offering mobile and fixed network services, including SIMs and eSIMs
          with international numbers. With over 100,000 local users and wide
          corporate adoption, its products are available across
          GeorgiaGlobalCell LLC, founded in 2009, is a Georgian telecom .
        </span>
        <Link href={"/"}>
          <div className={styles.seeMore}>
            <span className={styles.see}>See more</span>
            <Image src={"/greensee.svg"} alt="arrow" width={18} height={18} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GreenCard;
