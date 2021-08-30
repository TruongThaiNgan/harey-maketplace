import React from 'react';

import { DropBoxProps } from './interfaces';
import classes from './DropBox.module.scss';

const DropBox: React.FC<DropBoxProps> = ({ list, style }) => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.dropBoxContainer} style={style}>
    {list.map(({ title }) => (
      <div key={title}>{title}</div>
    ))}
  </div>
);
DropBox.defaultProps = {};
export default DropBox;
