import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { rememberLanding } from './utils/leadMeta';

// Capture landing URL/referrer/UTMs before anything renders.
rememberLanding();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
