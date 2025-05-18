import React from "react";
import styles from "./TimelineEvent.module.scss";
import { TimelineItem } from "../interfaces/Timeline.interface";

const TimelineEvent: React.FC<TimelineItem> = ({ year, description }) => {
  return (
    <div className={styles.timeline__event}>
      <div className={styles.timeline__year}>{year}</div>
      <div className={styles.timeline__dot} />
      <div className={styles.timeline__description}>{description}</div>
    </div>
  );
};

export default TimelineEvent;
