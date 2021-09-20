import React from 'react';
import ReactDOM from 'react-dom';

import { BackDropProps } from './interfaces';
import classes from './BackDrop.module.scss';

const BackDrop: React.FC<BackDropProps> = ({ onClick }) =>
  ReactDOM.createPortal(
    <div className={classes.backDropContainer} onClick={onClick} aria-hidden />,
    document.getElementById('backdrop-hook')!,
  );

BackDrop.defaultProps = {};
export default React.memo(BackDrop);
