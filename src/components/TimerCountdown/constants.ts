import { Time } from './interfaces';

export const countdown = (time: Time): Time => {
  if (time.second > 0) return { ...time, second: time.second - 1 };

  if (time.minute > 0) return { ...time, minute: time.minute - 1, second: 59 };

  if (time.hour > 0) return { ...time, hour: time.hour - 1, minute: 59, second: 59 };

  if (time.day > 0) return { day: time.day - 1, hour: 23, minute: 59, second: 59 };

  return { ...time };
};
