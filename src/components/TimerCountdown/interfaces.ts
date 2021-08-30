export type TimerCountdownProps = Record<string, never>;

export interface Time {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export type timeUnit = 'day' | 'hour' | 'minute' | 'second';
