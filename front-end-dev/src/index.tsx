import * as React from 'react';
import { render } from 'react-dom';

import { App } from './containers';

const Root: JSX.Element = (
  <App />
);

render(
  Root, document.getElementById('app')
);
