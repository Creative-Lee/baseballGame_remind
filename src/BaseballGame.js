class BaseballGame {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  getCompareResult(userNumbers) {
    const userNumberArr = userNumbers.split('').map(Number);

    const strikeCount = this.#computer.getStrikeCount(userNumbers);
    const ballCount = this.#computer.getBallCount(userNumbers);

    return { strikeCount, ballCount };
  }
}

module.exports = BaseballGame;
