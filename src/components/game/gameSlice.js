import { createSlice } from "@reduxjs/toolkit";
import { save } from "../../app/persist";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    score1: 0,
    score2: 0,
  },
  reducers: {
    resetScores: (state) => {
      state.score1 = 0;
      state.score2 = 0;
    },
    setScore1: (state, action) => {
      state.score1 = Number.parseInt(action.payload);
    },
    setScore2: (state, action) => {
      state.score2 = Number.parseInt(action.payload);
    },
    incrementScore1: (state) => {
      state.score1 += 1;
      save("score1", state.score1);
    },
    incrementScore2: (state) => {
      state.score2 += 1;
      save("score2", state.score2);
    },
    decrementScore1: (state) => {
      state.score1 -= 1;
      save("score1", state.score1);
    },
    decrementScore2: (state) => {
      state.score2 -= 1;
      save("score2", state.score2);
    },
  },
});

export const {
  resetScores,
  setScore1,
  setScore2,
  incrementScore1,
  decrementScore1,
  incrementScore2,
  decrementScore2,
} = gameSlice.actions;

export const selectScore1 = (state) => state.game.score1;
export const selectScore2 = (state) => state.game.score2;
export const selectDifference = (state) =>
  Math.abs(state.game.score1 - state.game.score2);

export default gameSlice.reducer;
