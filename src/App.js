// src/App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/Emaillist';
import EmailDetail from './components/EmailDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail/:id" element={<EmailDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
