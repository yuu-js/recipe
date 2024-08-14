import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import Recipe from "./AddRecipe";
import Profil from "./ProfilePage";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import Password from "./PasswordPage";
import Token from "./TokenPage";
import Reset from "./ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/token" element={<Token />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
