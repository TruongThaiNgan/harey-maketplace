import React from 'react';

import classes from './About.module.scss';
import { AboutProps } from './interfaces';

const About: React.FC<AboutProps> = () => (
  <div className={classes.aboutContainer}>
    <div>about</div>
    <button type="button">click</button>
  </div>
);
About.defaultProps = {};
export default About;
