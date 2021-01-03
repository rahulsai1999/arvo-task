import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayer1, selectPlayer2 } from "../intro/introSlice";
import {
  decrementScore1,
  decrementScore2,
  incrementScore1,
  incrementScore2,
  selectDifference,
  selectScore1,
  selectScore2,
} from "./gameSlice";

const Game = () => {
  const score1 = useSelector(selectScore1);
  const score2 = useSelector(selectScore2);
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);
  const difference = useSelector(selectDifference);
  const dispatch = useDispatch();

  const returnWinner = (s1, s2) => {
    if (s1 > s2) return player1;
    else if (s2 > s1) return player2;
    else return "Tied";
  };

  return (
    <div className="container" style={{ marginTop: "3%", padding: "3%" }}>
      <div className="row">
        <div className="col s5">
          <span style={{ fontSize: 25 }}>{player1}</span>
        </div>
        <div className="col s3">
          <span style={{ fontSize: 25 }}>{score1}</span>
        </div>
        <div className="col s1">
          <button
            type="button"
            className="btn-floating waves-effect waves-light green"
            aria-label="Increment score 1"
            onClick={() => dispatch(incrementScore1())}
          >
            <i className="large material-icons">add</i>
          </button>
        </div>
        <div className="col s1">
          <button
            type="button"
            className={
              score1 !== 0
                ? "btn-floating waves-effect waves-light red"
                : "btn-floating disabled"
            }
            aria-label="Decrement score 1"
            onClick={() => dispatch(decrementScore1())}
          >
            <i className="large material-icons">remove</i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s5">
          <span style={{ fontSize: 25 }}>{player2}</span>
        </div>
        <div className="col s3">
          <span style={{ fontSize: 25 }}>{score2}</span>
        </div>
        <div className="col s1">
          <button
            type="button"
            className="btn-floating waves-effect waves-light green"
            aria-label="Increment score 2"
            onClick={() => dispatch(incrementScore2())}
          >
            <i className="large material-icons">add</i>
          </button>
        </div>
        <div className="col s1">
          <button
            type="button"
            className={
              score2 !== 0
                ? "btn-floating waves-effect waves-light red"
                : "btn-floating disabled"
            }
            aria-label="Decrement score 2"
            onClick={() => dispatch(decrementScore2())}
          >
            <i className="large material-icons">remove</i>
          </button>
        </div>
      </div>
      <div className="divider" style={{ margin: "3%" }} />
      <div className="row">
        <div className="col s6">Current Winner</div>
        <div className="col s6">
          <span>{returnWinner(score1, score2)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col s6">Win Difference</div>
        <div className="col s6">
          <span>{difference}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
