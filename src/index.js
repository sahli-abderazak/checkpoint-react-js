
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LoginForm} from './Components/Form';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoginForm/>
  
  </React.StrictMode>,
  document.getElementById('root')
);
