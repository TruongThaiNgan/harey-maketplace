import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { CustomLinkProps } from './interfaces';
import classes from './CustomLink.module.scss';

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, style, className }) => (
  <NavLink to={to} className={classNames(classes.customLinkContainer, className)} style={style}>
    {children}
  </NavLink>
);
CustomLink.defaultProps = {};
export default CustomLink;
