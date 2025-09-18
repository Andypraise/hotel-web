import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Room from "./page/Room/Room";
import About from "./page/About/About";
import EventCard from "./page/Event/EventCard";
import Contact from "./page/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<EventCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
