import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import store from '@Store/store';
import ErrorBoundary from '@Component/ErrorBoundary';

import App from './App';
import './i18n/i18n';
import './index.css';

const queryClient = new QueryClient();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK!);
const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Elements stripe={stripePromise}>
                <App />
              </Elements>
            </Router>
          </PersistGate>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
