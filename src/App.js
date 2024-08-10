import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipe from './AddRecipe';
import Profil from './Profile';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/profile" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;