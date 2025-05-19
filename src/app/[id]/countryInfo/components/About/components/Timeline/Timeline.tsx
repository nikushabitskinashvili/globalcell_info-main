import React from 'react';
import styles from "./Timeline.module.scss";
import { timelineData } from './Timeline-dummy';
import TimelineEvent from './TimelineEvent/TimelineEvent';

const Timeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((event, index) => {
    
        const belowIndices = [0, 2, 4]; 
        const isAbove = !belowIndices.includes(index);
        return (
          <TimelineEvent
            key={index}
            year={event.year}
            description={event.description}
            isAbove={isAbove}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
