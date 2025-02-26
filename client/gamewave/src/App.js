import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import GameLibrary from './components/GameLibrary';
import Footer from './components/Footer';
import GameDetailsPage from './components/GameDetailsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<GameLibrary />} />
          <Route path="/games/:id" element={<GameDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
