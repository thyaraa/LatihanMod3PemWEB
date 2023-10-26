// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Pastikan menggunakan Switch

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {" "}
        {/* Gunakan Switch */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Menu} />
        <Route component={NotFound} />
      </Routes>
      <Hero />
      <Footer />
    </Router>
  );
};

export default App;
