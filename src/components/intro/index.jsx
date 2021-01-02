import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setPlayer1, setPlayer2, goToGame } from "./introSlice";
import { selectPlayer1, selectPlayer2 } from "./introSlice";

const Intro = (props) => {
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        value={player1}
        onChange={(e) => {
          dispatch(setPlayer1(e.target.value));
        }}
      />
      <input
        type="text"
        value={player2}
        onChange={(e) => {
          dispatch(setPlayer2(e.target.value));
        }}
      />
      <button onClick={() => dispatch(goToGame())}>Continue</button>
    </>
  );
};

export default Intro;
