import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navBar";
import Inicio from "./Components/Inicio";
import Conocenos from "./Components/conocenos";
import RutasDomiciliosComponent from "./Components/rutasDomiciliosComponent";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primeicons/primeicons.css";

import "./css/principal.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div id="dip">
        <Routes>
          <Route path="/" element={<Inicio />} />{" "}
          {/* Cambia el enrutamiento a la nueva sintaxis */}
          <Route
            path="/rutas-domicilios"
            element={<RutasDomiciliosComponent />}
          />{" "}
          <Route path="/conocenos" element={<Conocenos />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
