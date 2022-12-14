import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { ThemProvider } from './provider/ThemProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemProvider>
        <App />
      </ThemProvider>
    </Router>
  </React.StrictMode>
);

