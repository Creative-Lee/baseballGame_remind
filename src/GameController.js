const BaseballGame = require('./BaseballGame.js');
const Computer = require('./Computer.js');

class GameController {
  #baseballGame;

  start() {
    const computer = new Computer();
    this.#baseballGame = new BaseballGame(computer);
  }
}

module.exports = GameController;
