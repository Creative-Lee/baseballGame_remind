const BaseballGame = require('./BaseballGame.js');
const Computer = require('./Computer.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validation = require('./Validation.js');
const randomNumberMaker = require('./utils/randomNumberMaker.js');

class GameController {
  #baseballGame;

  start() {
    const computer = new Computer();
    computer.setRandomNumbers(randomNumberMaker());

    this.#baseballGame = new BaseballGame(computer);

    this.#requestUserNumbers();
  }

  #requestUserNumbers() {
    InputView.requestUserNumbers(this.#comparePhase.bind(this));
  }

  #comparePhase(userNumbers) {
    Validation.validateUserNumbers(userNumbers);

    const compareResult = this.#baseballGame.getCompareResult(userNumbers);
    OutputView.printResult(compareResult);
  }
}

module.exports = GameController;
