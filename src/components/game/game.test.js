import React from "react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { render, fireEvent } from "@testing-library/react";
import Game from "./index";

it("Increments Player 1's score by 5", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  for (let i = 0; i < 5; ++i) fireEvent.click(getByTestId("up1"));
  const num = getByTestId("score1").innerHTML;
  expect(num).toBe("5");
});

it("Decrements Player 1's score by 2", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  for (let i = 0; i < 2; ++i) fireEvent.click(getByTestId("down1"));
  const num = getByTestId("score1").innerHTML;
  expect(num).toBe("3");
});

it("Increments Player 2's score by 7", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  for (let i = 0; i < 7; ++i) fireEvent.click(getByTestId("up2"));
  const num = getByTestId("score2").innerHTML;
  expect(num).toBe("7");
});

it("Decrements Player 2's score by 4", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  for (let i = 0; i < 4; ++i) fireEvent.click(getByTestId("down2"));
  const num = getByTestId("score2").innerHTML;
  expect(num).toBe("3");
});

it("Checks Difference between Scores", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );
  const num = getByTestId("difference").innerHTML;
  expect(num).toBe("0");
});
