import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fonts.css';
import './assets/css/style.css';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
