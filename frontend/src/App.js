import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home.js";

function App() {
    return (
      <Router>
        <Routes>
          {/* <Route path="/register" element={<Register />} /> */}
          
          {<Route path="/" element={<Home />} /> }
      
        </Routes>
      </Router>
    );
  }

export default App;