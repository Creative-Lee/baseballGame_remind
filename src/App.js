const { Console } = require('@woowacourse/mission-utils');
const { GAME_START_MSG } = require('./constants/message.js');
const GameController = require('./GameController.js');

class App {
  play() {
    Console.print(GAME_START_MSG);

    const gameController = new GameController();
    gameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
