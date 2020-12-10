import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

const title = 'Covid Dashboard Init';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root'),
);

module.hot.accept();
