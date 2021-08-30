import React from 'react';
import { useQuery } from 'react-query';

import axios from '@Service/axios';

import { AboutProps } from './interfaces';
import classes from './About.module.scss';

const About: React.FC<AboutProps> = () => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  const temp = 0;
  const { isLoading, error, data, refetch, isFetching } = useQuery(
    'repoData',
    () =>
      axios
        .get('/shop/product')
        .then((res) => console.log(res))
        .catch((err) => console.log(err)),
    {
      enabled: false,
      cacheTime: 15000,
    },
  );
  if (isFetching) {
    return <div> loading ...</div>;
  }
  if (error) {
    return <div> error ...</div>;
  }
  return (
    <div className={classes.aboutContainer}>
      <div>About</div>
      <button
        type="button"
        onClick={() => {
          refetch();
        }}
      >
        click
      </button>
    </div>
  );
};

About.defaultProps = {};
export default About;
