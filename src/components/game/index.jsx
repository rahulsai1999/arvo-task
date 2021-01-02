import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementScore1, incrementScore2 } from "./gameSlice";
import { decrementScore1, decrementScore2 } from "./gameSlice";
import { selectScore1, selectScore2 } from "./gameSlice";
import { resetScores } from "./gameSlice";

import styles from "./game.module.css";

const Game = (props) => {
  const score1 = useSelector(selectScore1);
  const score2 = useSelector(selectScore2);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment score"
          onClick={() => dispatch(incrementScore1())}
        >
          +
        </button>
        <span className={styles.value}>{score1}</span>
        <span className={styles.value}>{score2}</span>
        <button
          className={styles.button}
          aria-label="Decrement score"
          onClick={() => dispatch(decrementScore1())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Game;
