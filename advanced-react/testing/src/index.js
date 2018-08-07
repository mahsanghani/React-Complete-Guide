import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

import App from 'components/App';

const app = (
  <Root>
    <BrowserRouter>
      <Route path='/' component={App}/>
    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.querySelector('#root'));