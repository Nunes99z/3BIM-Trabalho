import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(null);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api")
      .then(res => console.log("res"))
      .catch(error => console.log("error"));
  }, []);
  function aparecerPersonagem(id) {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then(resposta => resposta.json())
      .then(dados => {
        return fetch(dados.episode[dados.episode.length - 1])
          .then(res => res.json())
          .then(ep => {
            return {nome: dados.name,status: dados.status, especie: dados.species,genero: dados.gender,foto: dados.image,ultimoEp: ep.episode + " - " + ep.name
            };
          });
      })
      .then(personagem => setCharacter(personagem))
      .catch(erro => console.log("Erro:", erro));
  }  
  useEffect(() => {
    aparecerPersonagem(count);
  }, [count]);
  function proximoPersonagem() {
    if (count >= 826) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div className="app">
      {character && (
        <>
          <img src={character.foto} alt={character.nome} />
          <h2>{character.nome}</h2>
          <p>Status: {character.status}</p>
          <p>Espécie: {character.especie}</p>
          <p>Gênero: {character.genero}</p>
          <p>Último episódio:{character.ultimoEp}</p>
        </>
      )}
      <button onClick={proximoPersonagem}><h3>Próximo</h3></button>
    </div>
  );
}

export default App;