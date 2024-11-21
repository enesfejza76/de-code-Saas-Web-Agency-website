import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import TheTeamPage from "./pages/TheTeamPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/TheTeam" element={<TheTeamPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
