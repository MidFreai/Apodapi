import React from "react";
import Cartao from "./componentes/Cartao";
 
function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
        <h2>Explorador do Espaço </h2>
      </header>

      <main>
        {}
        <Cartao />
      </main>
    </div>
  );
}

export default App;
