import React from 'react';

import Footer from '@Component/Footer/Footer';
import Header from '@Component/Header/Header';
import DropBox from '@Component/DropBox';

import classes from './App.module.scss';
import MyRouter from './router/MyRouter';

function App(): JSX.Element {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.content}>
        <div className={classes.displayBoard}>
          <MyRouter />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
