import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

import { HomePage, FilmsPage } from "./pages";
import "./App.css";
import FilmsList from "./components/filmsList.jsx";
import { useState } from "react";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
