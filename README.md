# Arvolution Coding Task

![Test](https://github.com/rahulsai1999/arvo-task/workflows/Test/badge.svg)
![GH-Pages deployment](https://github.com/rahulsai1999/arvo-task/workflows/GH-Pages%20deployment/badge.svg)

## Features

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
- This project uses **Materialize CSS** as the styling library and the application is **responsive**.
- This project uses [ESLint](https://eslint.org/) for linting and utilizes the AirBnb React Style Guide with some custom rules. Refer [.eslintrc.json](.eslintrc.json) for the rules.
- The state is maintained using Redux and the Actions and Reducers can be found at [gameSlice.js](src/components/game/gameSlice.js) and [introSlice.js](src/components/intro/introSlice.js)
- The tests are written for testing the game functionality [game.test.js](src/components/game/game.test.js) using JestJS. It tests the incrementing, decrementing the scores of the players and the difference after the operations.
- The whole application is deployed on Github Pages using Github Actions as the CI/CD provider. Refer [GH-Pages Workflow](.github/workflows/gh-pages.yml) and [Test Workflow](.github/workflows/test.yml)

## Working

- To install the dependencies use `npm install` or `yarn install`
- To start the application use `npm start` or `yarn start`
- To test the application use `npm test` or `yarn test`
