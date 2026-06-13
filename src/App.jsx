import React, { useState, useEffect } from "react";

import Cartao from "./componentes/Cartao";
import Card from "./components/card.jsx"
 
function App() {
  const [titulo, setTitulo] = useState("Buscando no espaço...");
  const [urlFoto, setUrlFoto] = useState("");
  const [descricao, setdescricao] = useState("");

  fetch('https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU')
    .then(response => response.json())
    .then(data => {
        setTitulo(data.title);
        setUrlFoto(data.url);
        setdescricao(data.explanation)
    })
    .catch(error => {
        console.error("Erro ao buscar a API:", error);
    });
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
        <h2>Explorador do Espaço </h2>
      </header>

      <main>
        <Card src={ urlFoto } nome={ titulo } descricao={ descricao }/>
      </main>
    </div>
  );
}

export default App;
