import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import About from './components/about-page';
import Register from './components/register';
import Sell from './components/Sell';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="header.js" element={<Header />} />
        <Route path="contact.js" element={<Contact />} />
        <Route path="about-page.js" element={<About />} />
        <Route path="register.js" element={<Register />} />
        <Route path="Sell.js" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
