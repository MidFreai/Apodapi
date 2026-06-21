//import React, { useState, useEffect } from "react";
import './App.css'

import PainelCards from "./components/PainelCards.jsx";
import Menu from "./components/Menu.jsx";

export default function App() {
  return (
    <div className="App">
      <Menu/>
      <PainelCards/>
    </div>
  );
}