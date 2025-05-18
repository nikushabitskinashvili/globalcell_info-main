import Image from "next/image";
import styles from "./Partnership.module.scss";
import { useState } from "react";

const Partnership = () => {
  const [active, setActive] = useState("affiliate");
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Partnership Categories</span>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="/affiliate.png"
            alt="affiliate"
            width={191}
            height={209}
            onClick={() => setActive("affiliate")}
            className={active === "affiliate" ? styles.active : ""}
          />
          {active === "affiliate" && (
            <Image src="/line.svg" alt="line" width={195} height={31} />
          )}{" "}
        </div>
        <div className={styles.card}>
          <Image
            src="/corporate.png"
            alt="corporate"
            width={191}
            height={209}
            onClick={() => setActive("corporate")}
            className={active === "corporate" ? styles.active : ""}
          />
          {active === "corporate" && (
            <Image src="/line.svg" alt="line" width={195} height={31} />
          )}
        </div>
        <div className={styles.card}>
          <Image
            src="/dealer.png"
            alt="dealer"
            width={191}
            height={209}
            onClick={() => setActive("dealer")}
            className={active === "dealer" ? styles.active : ""}
          />
          {active === "dealer" && (
            <Image src="/line.svg" alt="line" width={195} height={31} />
          )}
        </div>
        <div className={styles.card}>
          <Image
            src="/distributor.png"
            alt="distributor"
            width={191}
            height={209}
            onClick={() => setActive("distributor")}
            className={active === "distributor" ? styles.active : ""}
          />
          {active === "distributor" && (
            <Image src="/line.svg" alt="line" width={195} height={31} />
          )}
        </div>
        <div className={styles.card}>
          <Image
            src="/exclusive.png"
            alt="exclusive"
            width={191}
            height={209}
            onClick={() => setActive("exclusive")}
            className={active === "exclusive" ? styles.active : ""}
          />
          {active === "exclusive" && (
            <Image src="/line.svg" alt="line" width={195} height={31} />
          )}
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.headline}>AFFILIATE PARTNER</span>
        <span className={styles.description}>
          As an Affiliate Partner, you play a key role in promoting our eSIM
          products to your audience. This partnership is ideal for individuals,
          influencers, or smaller companies looking to generate income through
          promotional activities with their own channels. Earn a 5% commission
          on sales made via unique promo codes. Low commitment, ideal for those
          focused on promotion rather than direct sales. With our tracking and
          reporting system for commissions you will be set up and ready at no
          time.
        </span>
      </div>
      <div className={styles.contact}>
        <span className={styles.headline}>
          For Partnership information please contact us:
        </span>
        <div className={styles.contactInfo}>
          <Image src="/call.svg" alt="call" width={24} height={24} />
          <span className={styles.text}>032 2 033 034</span>
        </div>
        <div className={styles.contactInfo}>
          <Image src="/inbox.svg" alt="inbox" width={24} height={24} />
          <span className={styles.text}>info@globalsoft.ge</span>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
