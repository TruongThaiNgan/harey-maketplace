import React from 'react';

import BackDrop from '@Component/BackDrop';

import { ModalProps } from './interfaces';
import classes from './Modal.module.scss';

const Modal: React.FC<ModalProps> = ({ show, className, children }) =>
  show ? (
    <div className={`${classes.modalContainer}`}>
      <BackDrop />
      <div className={`${classes.modal} ${className}`}>{children}</div>
    </div>
  ) : null;

Modal.defaultProps = {};
export default Modal;
