import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
const App = () => {
  const [characterData, setCharacterData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/?name=rick"
      )
      .then((response) => {
        setCharacterData(response.data.results);
      })
      .catch((error) => {
        console.log("Ah, geez.", error);
      });
  }, []);
  console.log(characterData);
  return (
    <div className="App">
      <header>
        <h1 className="Header">The Ricks of Rick and Morty</h1>
      </header>
      <main>
        {characterData.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              location={character.location.name}
              status={character.status}
            />
          );
        })}
      </main>
      <footer>
        <p>
          Coded by <a href="https://github.com/devandapaige">Amanda Nelson</a>
        </p>
        <p>
         2020
        </p>
      </footer>
    </div>
  );
};
export default App;
