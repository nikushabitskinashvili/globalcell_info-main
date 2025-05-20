import Image from "next/image";
import styles from "./About.module.scss";
import Timeline from "./components/Timeline/Timeline";
import TabletTimeline from "./components/TabletTimeline/TabletTimeline";
import MobileTimeline from "./components/MobileTimeline/MobileTimeline";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>About Company</span>
      <span className={styles.description}>
        GlobalCell LLC (I/C 204567085) is a Georgian telecommunication company
        registered on April 6, 2009 based on Georgian legislation. <br />
        From 2009, the company GlobalCell has offered innovative
        international/European SIM cards with free roaming calls to Georgian
        citizens. Over time, in the process of constant refinement and
        diversification of services and products, the company was able to offer
        a travel SIM card with European, as well as American, British and
        Georgian numbers to its customers. It is worth mentioning the
        development of digital services and products, through which subscribers
        have the opportunity to receive electronic SIM cards (e-SIM) with
        diverse, sophisticated and affordable telecommunication services along
        with about 20 other products of GlobalCell.
      </span>
      <div className={styles.timeline}>
        <div className={styles.desktopTimeline}>
          <Timeline></Timeline>
        </div>
        <div className={styles.tabletTimeline}>
          <TabletTimeline></TabletTimeline>
        </div>

        <div className={styles.mobileTimeline}>
          <MobileTimeline></MobileTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
