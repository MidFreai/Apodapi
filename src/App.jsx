import React, { useState, useEffect } from "react";
import './App.css'

import PainelCards from "./components/PainelCards.jsx";

export default function App() {
  return (
    <div className="App">
      <header >
        <h2>Explorando o Espaço</h2>
      </header>

      <PainelCards/>
    </div>
  );
}