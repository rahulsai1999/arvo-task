import { createSlice } from "@reduxjs/toolkit";
import { save } from "../../app/persist";

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
      save("player1", state.player1);
      save("player2", state.player2);
    },
    goToIntro: (state) => {
      state.gameActive = false;
    },
    clearPlayers: (state) => {
      state.player1 = "";
      state.player2 = "";
    },
    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.player2 = action.payload;
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
