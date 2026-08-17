import React from "react";
import NavBar from "./components/NavBar";
import QuickBall from "./components/QuickBall";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <NavBar />
      <QuickBall />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
