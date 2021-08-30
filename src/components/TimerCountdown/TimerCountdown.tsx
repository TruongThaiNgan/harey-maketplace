import React, { useEffect, useState } from 'react';

import { Time, TimerCountdownProps } from './interfaces';
import classes from './TimerCountdown.module.scss';

const countdown = (time: Time): Time => {
  if (time.second > 0) return { ...time, second: time.second - 1 };

  if (time.minute > 0) return { ...time, minute: time.minute - 1, second: 59 };

  if (time.hour > 0) return { ...time, hour: time.hour - 1, minute: 59, second: 59 };

  if (time.day > 0) return { day: time.day - 1, hour: 23, minute: 59, second: 59 };

  return { ...time };
};

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
    if (!timer) {
      const id = setInterval(() => {
        setTime((preTime) => countdown(preTime));
      }, 1000);
      setTimer(id);
    }
    return () => clearInterval(timer!);
  }, [timer]);
  // Constants

  // Action handlers

  // Renderers

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
