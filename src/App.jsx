import React, { useState, useEffect } from "react";


import Card from "./components/card.jsx"

function App() {
    const [titulo, setTitulo] = useState("Buscando no espaço...");
    const [urlFoto, setUrlFoto] = useState("");

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU')
            .then(response => response.json())
            .then(data => {
                setTitulo(data.title);
                setUrlFoto(data.url);
            })
            .catch(error => {
                console.error("Erro ao buscar a API:", error);
                setTitulo("Erro ao carregar a comunicação espacial.");
            });
    }, []);
    const [titulo2, setTitulo2] = useState("Buscando no espaço...");
    const [urlFoto2, setUrlFoto2] = useState("");

  
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
        <h2>Explorando o  Espaço </h2>
      </header>

      <main style={{ 
          display: 'flex', 
          marginLeft: 'auto',
          marginRight: 'auto', 
          width: '40vw',
      }}>
        <Card src={ urlFoto } nome={ titulo } />
      </main>
    </div>
  );
}

export default App;
