// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, create an index.css file for global styles if needed
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
