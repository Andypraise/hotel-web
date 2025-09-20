import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Room from "./page/Room/Room";
import About from "./page/About/About";
import EventCard from "./page/Event/EventCard";
import Contact from "./page/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // hide preloader when page loads OR after 10 seconds
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    // fallback timeout (10s)
    const timer = setTimeout(() => setLoading(false), 10000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      {loading && <Preloader loading={loading} />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<EventCard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
