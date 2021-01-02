import React from "react";
import { useSelector } from "react-redux";
import { selectGame } from "./components/intro/introSlice";

import Intro from "./components/intro";
import Game from "./components/game";

import "./App.css";

const App = () => {
  const game = useSelector(selectGame);
  return (
    <div className="App">
      <header className="App-header">Ping-Pong</header>
      {!game ? <Intro /> : <Game />}
    </div>
  );
};

export default App;
