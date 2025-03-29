import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Coading from "./components/Coading";
import Landing from "./components/Landing";


function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Interview" element={<Home />} />
        <Route path="/coading" element={<Coading />} /> 
      </Routes>    
    </Router>
    
  );
}

export default App;

