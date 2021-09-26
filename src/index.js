import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rol from './components/Rol/Rol';
import { Category, readUsers, writeUser, writeThing } from './components/remoteData';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Rol /> */}
  </React.StrictMode>,
  document.getElementById('root')
);