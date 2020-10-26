import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
//default:
const App = () => {
  const [characterData, setCharacterData] = useState([]);
  let Search = (input) => {
    if (input === "") {
      return "";
    } else {
      return input;
    }
  };
  console.log(Search("morty"));
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character?", {
        params: {
          name: Search,
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
          <button id="morty" onClick={Search("morty")}>
            Mortys
          </button>
          <button id="jerry" onClick={Search("jerry")}>
            Jerrys
          </button>
          <button id="summer" onClick={Search("summer")}>
            Summers
          </button>
          <button id="beth" onClick={Search("beth")}>
            Beths
          </button>
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
