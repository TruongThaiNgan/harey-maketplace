import React from 'react';
import { NavLink } from 'react-router-dom';

import { CustomLinkProps } from './interfaces';
import classes from './CustomLink.module.scss';

const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  const temp = 0;
  return (
    <NavLink to={to} className={classes.customLinkContainer}>
      {children}
    </NavLink>
  );
};

CustomLink.defaultProps = {};
export default CustomLink;
