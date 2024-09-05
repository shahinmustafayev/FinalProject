import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Slider from './components/Slider.js';
import Products from './components/Products.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Products />
    <App />
    <Footer />
  </React.StrictMode>
);
