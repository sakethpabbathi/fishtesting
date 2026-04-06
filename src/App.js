import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import ImportsExportsPage from "./ImportsExportsPage";
import React from "react";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imports-exports" element={<ImportsExportsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;