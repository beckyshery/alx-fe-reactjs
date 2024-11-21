import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure this path matches your file structure
import './index.css'; // If you have a CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);