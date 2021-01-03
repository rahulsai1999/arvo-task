import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, getStore } from "../../app/persist";
import { setScore1, setScore2 } from "../game/gameSlice";
import {
  goToGame,
  selectPlayer1,
  selectPlayer2,
  setPlayer1,
  setPlayer2,
} from "./introSlice";

const Intro = () => {
  const [leftOff, setLeftOff] = useState(null);
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);
  const dispatch = useDispatch();

  useEffect(() => {
    const store = getStore();
    const { p1, p2, s1, s2 } = store;
    if (p1 && p2 && s1 && s2) {
      setLeftOff(store);
    }
  }, []);

  const continueLeftoff = () => {
    dispatch(setPlayer1(leftOff.p1));
    dispatch(setPlayer2(leftOff.p2));
    dispatch(setScore1(leftOff.s1));
    dispatch(setScore2(leftOff.s2));
    dispatch(goToGame());
  };

  const clearLeftoff = () => {
    setLeftOff(null);
    clearStore();
  };

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
          <label htmlFor="player1">Player 1</label>
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
          <label htmlFor="player2">Player 2</label>
        </div>
      </div>
      <button
        type="button"
        className={
          player1.length !== 0 && player2.length !== 0
            ? "waves-effect waves-light btn-large"
            : "btn-large disabled"
        }
        onClick={() => dispatch(goToGame())}
      >
        <i className="material-icons right">arrow_forward</i>Continue
      </button>

      <div className="divider" style={{ margin: "3%" }} />

      {leftOff ? (
        <>
          <div className="row">
            <h5>{leftOff?.s1}</h5>
            <h5>{leftOff?.s2}</h5>
            <h5>{leftOff?.p1}</h5>
            <h5>{leftOff?.p2}</h5>
            <button
              type="button"
              className={"waves-effect waves-light btn-large"}
              onClick={() => continueLeftoff()}
            >
              <i className="material-icons right">arrow_forward</i>Continue
            </button>
            <button
              type="button"
              className={"waves-effect waves-light btn-large"}
              onClick={() => clearLeftoff()}
            >
              <i className="material-icons right">close</i>Clear
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Intro;
