import Image from "next/image";
import styles from "./Coverage.module.scss";

const Coverage = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Coverage Area of Sales:</span>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image src="/coverage.png" width={312} height={304} alt="coverage" />
          <div className={styles.infoContainer}>
            <div className={styles.infoHeader}>
              <span className={styles.infoTitle}>Where we operate </span>
              <span className={styles.infoText}>
                It is possible to purchase GlobalCell telecommunication products
                not only at the direct sales branches, but also throughout the
                country, in state and private partner organizations, including:
              </span>
            </div>
            <div className={styles.infoMainList}>
              <div className={styles.infoMainListItemContainer}>
                <Image
                  src="/arrowdown.svg"
                  alt="arrowdown"
                  width={24}
                  height={24}
                />
                <span className={styles.infoMainListItem}>
                  In all branches of Public Service Hall, throughout the country
                </span>
              </div>
              <div className={styles.infoMainListItemContainer}>
                <Image
                  src="/arrowdown.svg"
                  alt="arrowdown"
                  width={24}
                  height={24}
                />
                <span className={styles.infoMainListItem}>
                  In all branches of Georgian Post, throughout the country
                </span>
              </div>
              <div className={styles.infoMainListItemContainer}>
                <Image
                  src="/arrowdown.svg"
                  alt="arrowdown"
                  width={24}
                  height={24}
                />
                <span className={styles.infoMainListItem}>
                  In branches of Georgian Airways
                </span>
              </div>
              <div className={styles.infoMainListItemContainer}>
                <Image
                  src="/arrowdown.svg"
                  alt="arrowdown"
                  width={24}
                  height={24}
                />
                <span className={styles.infoMainListItem}>
                  In many travel companies and shopping centers all over the
                  country
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
