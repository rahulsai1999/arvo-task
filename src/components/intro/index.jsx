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
        <div className="input-field col s10 m8 l8 xl6 push-s1 push-m2 push-l2 push-xl3">
          <input
            id="player1"
            autoComplete={false}
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
        <div className="input-field col s10 m8 l8 xl6 push-s1 push-m2 push-l2 push-xl3">
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

      <div className="divider" style={{ margin: "2%" }} />

      {leftOff ? (
        <>
          <div className="row">
            <div className="col s12 m8 l8 xl6 push-m2 push-l2 push-xl3">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    Continue where you left off
                  </span>
                  <br />
                  <div className="row">
                    <div className="col s8 push-s1">
                      <span className="card-title">{leftOff?.p1}</span>
                    </div>
                    <div className="col s4 pull-s3">
                      <span className="card-title">{leftOff?.s1}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s8 push-s1">
                      <span className="card-title">{leftOff?.p2}</span>
                    </div>
                    <div className="col s4 pull-s3">
                      <span className="card-title">{leftOff?.s2}</span>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <button
                    type="button"
                    style={{ marginLeft: "1%", marginRight: "1%" }}
                    className={"waves-effect waves-light btn"}
                    onClick={() => continueLeftoff()}
                  >
                    <i className="material-icons right">arrow_forward</i>
                    Continue
                  </button>
                  <button
                    type="button"
                    style={{ marginLeft: "1%", marginRight: "1%" }}
                    className={"waves-effect waves-light btn"}
                    onClick={() => clearLeftoff()}
                  >
                    <i className="material-icons right">close</i>Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Intro;
