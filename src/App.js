import React from "react";
import "./App.css";
import Character from "./components/Character";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <header>
        <h1 className="Header">Ricks of Rick and Morty</h1>
      </header>
      <Character />
      <footer>
        <p>
          Coded by <a href="https://github.com/devandapaige">Amanda Nelson</a>
        </p>
        <p>
          Background Photo by{" "}
          <a href="https://alphacoders.com/users/profile/143138/abnerndr">
            Abner Andre
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
