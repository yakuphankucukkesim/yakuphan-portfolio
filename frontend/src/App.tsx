import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
