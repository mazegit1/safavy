import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing the page components
import AnaSehife from "./pages/AnaSehife";
import Kateqoriyalar from "./pages/Kateqoriyalar";
import Bloglar from "./pages/Bloglar";
import Elaqe from "./pages/Elaqe";
import Kurslar from "./pages/Kurslar";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
// Importing shared components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header component */}
        <Header />

        {/* Main content with routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<AnaSehife />} />
            <Route path="/kateqoriyalar" element={<Kateqoriyalar />} />
            <Route path="/bloqlar" element={<Bloglar />} />
            <Route path="/elaqe" element={<Elaqe />} />
            <Route path="/kurslar" element={<Kurslar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
