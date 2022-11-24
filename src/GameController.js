const BaseballGame = require('./BaseballGame.js');
const Computer = require('./Computer.js');
const InputView = require('./InputView.js');

class GameController {
  #baseballGame;

  start() {
    const computer = new Computer();
    this.#baseballGame = new BaseballGame(computer);

    this.#requestUserNumbers();
  }

  #requestUserNumbers() {
    InputView.requestUserNumbers((userNumbers) => {});
  }
}

module.exports = GameController;
