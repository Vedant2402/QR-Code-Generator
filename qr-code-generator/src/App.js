import React, { useState, useEffect } from 'react';
import QRGenerator from './components/QRGenerator';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app">
      <header className="header">
        <div className="branding">
          <img src="/logo192.png" alt="logo" className="logo" />
          <h1>QR Code Generator</h1>
        </div>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <QRGenerator />

      <footer className="footer">
        © {new Date().getFullYear()} Vedant Kankate. All rights reserved.
      </footer>

      <ToastContainer />
    </div>
  );
}

export default App;
