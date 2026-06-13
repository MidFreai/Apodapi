import React from "react";
import Card from "./components/card.jsx"
import Botao from "./components/botao.jsx";
import Titulo from "./components/Titulo.jsx";

export default function App() {
  return(
    <div style={{ padding: "40px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>

      <Titulo msg="Bananinha"/>

      <Botao msg="aqui" click={()=>inclick()}/>

      <Titulo msg="Lista de Colaboradores"/>

      <Botao msg="aqui" click={ ()=>{ location.href='https://www.google.com' } }/>

      <Card src="https://i.pravatar.cc/150?u=felipe" nome="Felipe Silva" descricao="Desenvolvedor Frontend"/>

      <Card src="https://i.pravatar.cc/150?u=ana" nome="Ana Souza" descricao="UX Designer"/>

      <Card src="https://i.pravatar.cc/150?u=carlos" nome="Carlos Oliveira" descricao="Gerente de Projetos"/>

    </div>
  );
}

function inclick(){
  alert("ai");
}