import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "../../pages/login";

import React from "react";
import Dashboard from "../../pages/dashboard";

function Routing(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default Routing;
