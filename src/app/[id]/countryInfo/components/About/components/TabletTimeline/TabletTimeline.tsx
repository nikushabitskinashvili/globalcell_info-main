import React from "react";
import styles from "./TabletTimeline.module.scss";
import { timelineData } from "../Timeline/Timeline-dummy";
import TabletTimelineEvent from "./components/TabletTimelineEvent/TabletTimelineEvent";

const TabletTimeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((event, index) => (
        <TabletTimelineEvent
          key={index}
          year={event.year}
          description={event.description}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default TabletTimeline;
