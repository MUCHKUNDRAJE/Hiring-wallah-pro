import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Coading from "./components/Coading";


function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coading" element={<Coading />} />
        
      </Routes>    
    </Router>
    
  );
}

export default App;

