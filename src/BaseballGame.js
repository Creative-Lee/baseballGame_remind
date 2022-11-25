class BaseballGame {
  #computer;

  constructor(computer) {
    this.#computer = computer;
    this.#computer.initRandomNumbers();
  }

  getCompareResult(userNumbers) {
    const userNumberArr = userNumbers.split('').map(Number);

    const strikeCount = this.#computer.getStrikeCount(userNumberArr);
    const ballCount = this.#computer.getBallCount(userNumberArr);

    return { strikeCount, ballCount };
  }
}

module.exports = BaseballGame;
