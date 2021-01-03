import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setPlayer1, setPlayer2, goToGame } from "./introSlice";
import { selectPlayer1, selectPlayer2 } from "./introSlice";

const Intro = (props) => {
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="input-field col offset-s3 s6">
          <input
            id="player1"
            type="text"
            className="validate"
            value={player1}
            onChange={(e) => {
              dispatch(setPlayer1(e.target.value));
            }}
          />
          <label for="player1">Player 1</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col offset-s3 s6">
          <input
            id="player2"
            type="text"
            className="validate"
            value={player2}
            onChange={(e) => {
              dispatch(setPlayer2(e.target.value));
            }}
          />
          <label for="player2">Player 2</label>
        </div>
      </div>
      <button
        className={
          player1.length !== 0 && player2.length !== 0
            ? "waves-effect waves-light btn-large"
            : "btn-large disabled"
        }
        onClick={() => dispatch(goToGame())}
      >
        <i class="material-icons right">arrow_forward</i>Continue
      </button>
    </div>
  );
};

export default Intro;
