import { createSlice } from "@reduxjs/toolkit";

export const introSlice = createSlice({
  name: "intro",
  initialState: {
    gameActive: false,
    player1: "",
    player2: "",
  },
  reducers: {
    goToGame: (state) => {
      state.gameActive = true;
    },
    goToIntro: (state) => {
      state.gameActive = false;
    },
    clearPlayers: (state) => {
      state.player1 = "";
      state.player2 = "";
    },
    setPlayer1: (state, dispatch) => {
      state.player1 = dispatch.payload;
    },
    setPlayer2: (state, dispatch) => {
      state.player2 = dispatch.payload;
    },
  },
});

export const {
  goToGame,
  goToIntro,
  clearPlayers,
  setPlayer1,
  setPlayer2,
} = introSlice.actions;

export const selectGame = (state) => state.intro.gameActive;
export const selectPlayer1 = (state) => state.intro.player1;
export const selectPlayer2 = (state) => state.intro.player2;

export default introSlice.reducer;
