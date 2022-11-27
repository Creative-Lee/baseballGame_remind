const BaseballGame = require('./BaseballGame.js');
const Computer = require('./Computer.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validation = require('./Validation.js');
const randomNumberMaker = require('./utils/randomNumberMaker.js');
const { GAME_NUMBER, COMMAND } = require('./constants/condition.js');
const { Console } = require('@woowacourse/mission-utils');

class GameController {
  #baseballGame;

  start() {
    const randomNumbers = randomNumberMaker();
    const computer = new Computer(randomNumbers);

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

    OutputView.printGameEndMsg();
    this.#requestRestartCommand();
  }

  #requestRestartCommand() {
    InputView.requestRestartCommand(this.#restartPhase.bind(this));
  }

  #restartPhase(command) {
    if (command === COMMAND.restart) {
      this.start();
      return;
    }

    if (command === COMMAND.end) {
      Console.close();
    }
  }
}

module.exports = GameController;
