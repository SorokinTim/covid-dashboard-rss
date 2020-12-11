import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);

module.hot.accept();
