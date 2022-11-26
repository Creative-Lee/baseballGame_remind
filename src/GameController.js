const BaseballGame = require('./BaseballGame.js');
const Computer = require('./Computer.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validation = require('./Validation.js');
const randomNumberMaker = require('./utils/randomNumberMaker.js');
const { GAME_NUMBER } = require('./constants/condition.js');
const { Console } = require('@woowacourse/mission-utils');

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

    this.#retryPhase(compareResult);
  }

  #retryPhase({ strikeCount }) {
    const isEnd = strikeCount === GAME_NUMBER.length;

    if (!isEnd) {
      this.#requestUserNumbers();
      return;
    }

    this.#endPhase();
  }

  #endPhase() {
    OutputView.printGameEndMsg();

    InputView.requestRestartCommand(this.#restartPhase.bind(this));
  }

  #restartPhase(command) {
    if (command === '1') {
      this.start();
      return;
    }

    if (command === '2') {
      Console.close();
    }
  }
}

module.exports = GameController;
