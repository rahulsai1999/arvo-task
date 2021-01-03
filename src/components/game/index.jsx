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
    <div className="container" style={{ marginTop: "3%", padding: "2%" }}>
      <div className="row">
        <div className="col s5 xl6">
          <span style={{ fontSize: 25 }}>{player1}</span>
        </div>
        <div className="col s3 xl4 pull-xl2">
          <span style={{ fontSize: 25 }} data-testid="score1">
            {score1}
          </span>
        </div>
        <div className="col s2 xl1 pull-xl2">
          <button
            type="button"
            className="btn-floating waves-effect waves-light green"
            aria-label="Increment score 1"
            data-testid="up1"
            onClick={() => dispatch(incrementScore1())}
          >
            <i className="large material-icons">add</i>
          </button>
        </div>
        <div className="col s2 xl1 pull-xl2">
          <button
            type="button"
            className={
              score1 !== 0
                ? "btn-floating waves-effect waves-light red"
                : "btn-floating disabled"
            }
            aria-label="Decrement score 1"
            data-testid="down1"
            onClick={() => dispatch(decrementScore1())}
          >
            <i className="large material-icons">remove</i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s5 xl6">
          <span style={{ fontSize: 25 }}>{player2}</span>
        </div>
        <div className="col s3 xl4 pull-xl2">
          <span style={{ fontSize: 25 }} data-testid="score2">
            {score2}
          </span>
        </div>
        <div className="col s2 xl1 pull-xl2">
          <button
            type="button"
            className="btn-floating waves-effect waves-light green"
            aria-label="Increment score 2"
            data-testid="up2"
            onClick={() => dispatch(incrementScore2())}
          >
            <i className="large material-icons">add</i>
          </button>
        </div>
        <div className="col s2 xl1 pull-xl2">
          <button
            type="button"
            className={
              score2 !== 0
                ? "btn-floating waves-effect waves-light red"
                : "btn-floating disabled"
            }
            aria-label="Decrement score 2"
            data-testid="down2"
            onClick={() => dispatch(decrementScore2())}
          >
            <i className="large material-icons">remove</i>
          </button>
        </div>
      </div>
      <div className="divider" style={{ margin: "4%" }} />
      <div className="row">
        <div className="col s7 xl6">
          <span style={{ fontSize: 18 }}>Current Winner</span>
        </div>
        <div className="col s5 xl6">
          <span style={{ fontSize: 18 }}>{returnWinner(score1, score2)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col s7 xl6">
          <span style={{ fontSize: 18 }}>Win Difference</span>
        </div>
        <div className="col s5 xl6">
          <span data-testid="difference" style={{ fontSize: 18 }}>
            {difference}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Game;
