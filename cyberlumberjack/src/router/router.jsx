import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "../pages/home";

function ReactRouter() {
  return (
    <Router>
      <HelmetProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HelmetProvider>
    </Router>
  );
}

export default ReactRouter;
