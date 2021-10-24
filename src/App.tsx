import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import Footer from '@Component/Footer/Footer';
import Header from '@Component/Header/Header';

import classes from './App.module.scss';
import MyRouter from './router/MyRouter';

const App: React.FC = () => (
  <div className={classes.app}>
    <Header />
    <div className={classes.content}>
      <div className={classes.displayBoard}>
        <PayPalScriptProvider options={{ 'client-id': 'AaGbGzEjDCfCBAMGETN670ViBvc9E4M3sPteYuONSn4p8Cm' }}>
          <MyRouter />
        </PayPalScriptProvider>
      </div>
    </div>

    <Footer />
  </div>
);

export default App;
