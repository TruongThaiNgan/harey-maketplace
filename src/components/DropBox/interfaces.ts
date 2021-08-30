import { CSSProperties } from 'react';

interface item {
  title: string;
}

export interface DropBoxProps {
  style?: CSSProperties;
  list: item[];
}
