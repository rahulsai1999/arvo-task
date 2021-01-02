import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../components/game/gameSlice";
import introReducer from "../components/intro/introSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
    intro: introReducer,
  },
});
