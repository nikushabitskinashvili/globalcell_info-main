import React from "react";
import styles from "./MobileTimeline.module.scss";
import { timelineData } from "../Timeline/Timeline-dummy";
import MobileTimelineEvent from "./components/MobileTimelineEvent/MobileTimelineEvent";

const MobileTimeline = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <MobileTimelineEvent
          key={index}
          year={item.year}
          description={item.description}
          isAbove={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default MobileTimeline;
