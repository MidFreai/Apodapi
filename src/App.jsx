import React, { useState, useEffect } from "react";

import './App.css'
import Card from "./components/card.jsx"

function App() {
    const [Info, setInfo] = useState ([]);
    const [Api, setApi] = useState("https://api.nasa.gov/planetary/apod?api_key=1iXOrAlworQpzLt8lVEh9REjxDw3FkFZAjMyE9oU&start_date=2026-06-11")

    useEffect(() => {
        fetch(Api)
            .then(response => response.json())
            .then(data => {
                setInfo(data);
            })
            .catch(error => {
                console.error("Erro ao buscar a API:", error);
                setTitulo("Erro ao carregar a comunicação espacial.");
            });
            
    }, []);

  return (
    <div className="App">
      <header >
        <h2>Explorando o  Espaço </h2>
      </header>

      <main>
        {Info.map((data)=>(<Card key={data.date} src={data.hdurl} nome={data.title} descricao={data.explanation}/>))}
      </main>
    </div>
  );
}

export default App;
