import React, { useEffect, useState } from 'react';

import { countdown } from './constants';
import { Time, TimerCountdownProps } from './interfaces';
import classes from './TimerCountdown.module.scss';

const TimerCountdown: React.FC<TimerCountdownProps> = () => {
  // Hook states
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState<Time>({
    day: 99,
    hour: 7,
    minute: 10,
    second: 50,
  });

  // Hook effects
  useEffect(() => {
    let isCancelled = false;
    const id = setInterval(() => {
      if (!isCancelled) setTime((preTime) => countdown(preTime));
    }, 1000);
    setTimer(id);
    return () => {
      isCancelled = true;
      if (timer) clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.timerCountdownContainer}>
      <div className={classes.block}>
        <div className={classes.number}>{time.day}</div>
        <div className={classes.format}>days</div>
      </div>
      <div className={classes.block}>
        <div className={classes.number}>{time.hour}</div>
        <div className={classes.format}>hours</div>
      </div>
      <div className={classes.block}>
        <div className={classes.number}>{time.minute}</div>
        <div className={classes.format}>minutes</div>
      </div>
      <div className={classes.block}>
        <div className={classes.number}>{time.second}</div>
        <div className={classes.format}>seconds</div>
      </div>
    </div>
  );
};

TimerCountdown.defaultProps = {};
export default TimerCountdown;
