import React from "react";
import { useSelector } from "react-redux";
import { selectGame } from "./components/intro/introSlice";

import Animation from "./components/intro/animation";

import Intro from "./components/intro";
import Game from "./components/game";

import "./App.css";

const App = () => {
  const game = useSelector(selectGame);
  return (
    <div className="App">
      <div className="row">
        <Animation />
      </div>
      {!game ? <Intro /> : <Game />}
    </div>
  );
};

export default App;
