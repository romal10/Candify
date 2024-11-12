import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind CSS import
import CandifyApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CandifyApp />
  </React.StrictMode>
);