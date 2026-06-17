import React, { useState, useEffect } from "react";
import './App.css'

import PainelCards from "./components/PainelCards.jsx";

function App() {
  return (
    <div className="App">
      <header >
        <h2>Explorando o Espaço</h2>
      </header>

      <PainelCards/>
    </div>
  );
}

export default App;
