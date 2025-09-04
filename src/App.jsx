import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <h2>Rick Sanchez</h2>
      <p><strong>Status:</strong> Vivo</p>
      <p><strong>Espécie:</strong> Humano</p>
      <p><strong>Gênero:</strong> Masculino</p>
      <p><strong>Último episódio:</strong> Ep. 41 - "Rickmurai Jack"</p>
    </div>
  );
}

export default App;
