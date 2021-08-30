import React from 'react';

import axios from '@Service/axios';

import classes from './About.module.scss';
import { AboutProps } from './interfaces';

const About: React.FC<AboutProps> = () => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers
  <div className={classes.aboutContainer}>
    <div>About</div>
    <button
      type="button"
      onClick={() => {
        axios
          .get('/secret')
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }}
    >
      click
    </button>
  </div>
);
About.defaultProps = {};
export default About;
