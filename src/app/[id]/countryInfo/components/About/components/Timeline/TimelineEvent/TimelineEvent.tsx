import React from "react";
import styles from "./TimelineEvent.module.scss";
import { TimelineItem } from "../interfaces/Timeline.interface";

const TimelineEvent: React.FC<TimelineItem> = ({
  year,
  description,
  isAbove,
}) => {
  return (
    <div className={styles.event}>
      {isAbove && (
        <div className={`${styles.description} ${styles.above}`}>
          {description}
        </div>
      )}

      <div className={styles.year}>{year}</div>
      {!isAbove && (
        <div className={`${styles.description} ${styles.below}`}>
          {description}
        </div>
      )}
    </div>
  );
};

export default TimelineEvent; 
