import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ClockProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <ClockProvider>
      <App />
    </ClockProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
