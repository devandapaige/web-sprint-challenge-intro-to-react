import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  let Search = (input) => {
    if (input === "") {
      return "";
    } else {
      document.getElementsByName(
        "h1"
      ).textContent = `${input}s of Rick and Morty`;
      return input;
      }};
  //default alive characters shown on page before button clicks:
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character?", {
        params: {
          name: Search(),
        },
      })
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
        <h1>Rick and Morty Characters</h1>
        <div className="buttonsContainer">
          <button id="rick" onClick={Search("rick")}>
            Ricks
          </button>
          <button id="morty">Mortys</button>
          <button id="jerry">Jerrys</button>
          <button id="summer">Summers</button>
          <button id="beth">Beths</button>
        </div>
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
        <p>2020</p>
      </footer>
    </div>
  );
};
export default App;
