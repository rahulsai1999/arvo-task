import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectPlayer1, selectPlayer2 } from "../intro/introSlice";
import { incrementScore1, incrementScore2 } from "./gameSlice";
import { decrementScore1, decrementScore2 } from "./gameSlice";
import { selectScore1, selectScore2 } from "./gameSlice";
import { selectDifference } from "./gameSlice";
// import { resetScores } from "./gameSlice";

import styles from "./game.module.css";

const Game = (props) => {
  const score1 = useSelector(selectScore1);
  const score2 = useSelector(selectScore2);
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);
  const difference = useSelector(selectDifference);

  const dispatch = useDispatch();

  const returnWinner = (score1, score2) => {
    if (score1 > score2) return player1;
    else if (score2 > score1) return player2;
    else return "Tied";
  };

  return (
    <div>
      <span className={styles.value}>{score1}</span>
      <span className={styles.value}>{score2}</span>
      <span className={styles.value}>{difference}</span>
      <span className={styles.value}>{returnWinner(score1, score2)}</span>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment score 1"
          onClick={() => dispatch(incrementScore1())}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Decrement score 2"
          onClick={() => dispatch(decrementScore1())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment score 2"
          onClick={() => dispatch(incrementScore2())}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Decrement score 2"
          onClick={() => dispatch(decrementScore2())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Game;
