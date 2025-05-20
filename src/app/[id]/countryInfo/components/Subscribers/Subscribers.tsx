import Image from "next/image";
import styles from "./Subscribers.module.scss";

const Subscribers = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Subscribers</span>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image
            src="/subscribe.png"
            alt="subscribers"
            width={536}
            height={353}
            className={styles.image}
          />
          <div className={styles.infoContainer}>
            <div className={styles.infoHeader}>
              <span className={styles.infoTitle}>
                Trusted by 100,000 + Georgians
              </span>
              <span className={styles.infoDescription}>
                From everyday users to top government and corporate clients,
                GlobalCell powers communication for all.
              </span>
            </div>
            <div className={styles.infoMain}>
              <div className={styles.infoMainContainer}>
                <span className={styles.infoMainText}>
                  Our Subscribers Enjoy:
                </span>
                <div className={styles.infoMainList}>
                  <div className={styles.infoMainListItemContainer}>
                    <Image
                      src="/verified.svg"
                      alt="verified"
                      width={24}
                      height={24}
                    />
                    <span className={styles.infoMainListItem}>
                      Mobile & fixed telephone services
                    </span>
                  </div>
                  <div className={styles.infoMainListItemContainer}>
                    <Image
                      src="/verified.svg"
                      alt="verified"
                      width={24}
                      height={24}
                    />
                    <span className={styles.infoMainListItem}>
                      Branded SMS (A2P) messaging
                    </span>
                  </div>
                  <div className={styles.infoMainListItemContainer}>
                    <Image
                      src="/verified.svg"
                      alt="verified"
                      width={24}
                      height={24}
                    />
                    <span className={styles.infoMainListItem}>
                      Telecom equipment & software
                    </span>
                  </div>
                  <div className={styles.infoMainListItemContainer}>
                    <Image
                      src="/verified.svg"
                      alt="verified"
                      width={24}
                      height={24}
                    />
                    <span className={styles.infoMainListItem}>
                      Telecom equipment & software
                    </span>
                  </div>
                  <div className={styles.infoMainListItemContainer}>
                    <Image
                      src="/verified.svg"
                      alt="verified"
                      width={24}
                      height={24}
                    />
                    <span className={styles.infoMainListItem}>
                      Ongoing tech support across platforms
                    </span>
                  </div>
                </div>
              </div>
              <span className={styles.infoMainNumber}>100K +</span>
            </div>
            <span className={styles.footerText}>
              Always connected. Always supported.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
