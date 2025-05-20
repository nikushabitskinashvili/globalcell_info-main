import React from "react";
import styles from "./TabletTimelineEvent.module.scss";
import { TimelineItem } from "../../../Timeline/interfaces/Timeline.interface";

interface Props extends TimelineItem {
  isLeft: boolean;
}

const TabletTimelineEvent: React.FC<Props> = ({ year, description, isLeft }) => {
  return (
    <div className={styles.event}>
      <div className={`${styles.descriptionWrapper} ${isLeft ? styles.left : styles.right}`}>
        <div className={styles.description}>{description}</div>
      </div>

      <div className={styles.circleWrapper}>
        <div className={styles.circle}>{year}</div>
      </div>
    </div>
  );
};

export default TabletTimelineEvent;
