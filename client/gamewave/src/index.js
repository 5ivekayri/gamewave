import React from 'react';
import ReactDOM from 'react-dom/client'; // Обратите внимание на изменение импорта
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Используем createRoot вместо render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
