import React from "react";
import styles from "./MobileTimelineEvent.module.scss";
import { TimelineItem } from "../../../Timeline/interfaces/Timeline.interface";
import Image from "next/image";

const MobileTimelineEvent = ({ year, description }: TimelineItem) => {
  return (
    <div className={styles.item}>
      <div className={styles.yearWrapper}>
        <div className={styles.year}>{year}</div>
        <Image
          src={"/timelineArrow.svg"}
          alt={"timelineArrow"}
          width={24}
          height={24}
        />
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default MobileTimelineEvent;
