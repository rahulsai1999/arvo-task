import { createSlice } from "@reduxjs/toolkit";

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
    setScore1: (state, dispatch) => {
      state.score1 = dispatch.payload;
    },
    setScore2: (state, dispatch) => {
      state.score2 = dispatch.payload;
    },
    incrementScore1: (state) => {
      state.score1 += 1;
    },
    incrementScore2: (state) => {
      state.score2 += 1;
    },
    decrementScore1: (state) => {
      state.score1 -= 1;
    },
    decrementScore2: (state) => {
      state.score2 -= 1;
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
