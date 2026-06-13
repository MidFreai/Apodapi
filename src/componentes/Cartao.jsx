import React, { useState, useEffect } from 'react';
import './Cartao.css';

function Cartao() {
    const [titulo, setTitulo] = useState("Buscando no espaço...");
    const [urlFoto, setUrlFoto] = useState("");

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
    useEffect(() => {
    });

    return (
        <div style={ {width:'100%', height:'100%'} }> 
            <div id="card" style={{
                backgroundImage: `url(${urlFoto})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover', 
                color: 'white',
                borderRadius: '10px',
                width:'100%',
            }}>
                <h2>{titulo}</h2>
                <p>descriçao</p>
            </div> 
        </div>
    );
}

export default Cartao;