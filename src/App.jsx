import React, { useState, useEffect } from "react";

import Cartao from "./componentes/Cartao";
import Card from "./components/card.jsx"

async function api_get() {
  const api = 'https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU';

  try{
    const response = await fetch(api);
    if(!response.ok){
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
  } catch(error) {
    console.error("Erro ao buscar a API:", error);
  }

  return json;
}

function App() {
  const [titulo, setTitulo] = useState("Buscando no espaço...");
  const [urlFoto, setUrlFoto] = useState("");
  const [descricao, setdescricao] = useState("");

  const json = api_get()  
  .then(data => {
      setTitulo(data.title);
      setUrlFoto(data.url);
      setdescricao(data.explanation);
  })
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
