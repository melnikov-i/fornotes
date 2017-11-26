import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { injectGlobal } from "styled-components";

injectGlobal`
    * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
  }
`;

import store from './store';
import { App } from '@src/containers';

const Root: JSX.Element = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(
  Root, document.getElementById('app')
);
