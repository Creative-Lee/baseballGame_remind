class BaseballGame {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  getCompareResult(userNumbers) {
    const userNumberArr = userNumbers.split('').map(Number);

    this.#computer.getStrikeCount(userNumbers);
  }
}

module.exports = BaseballGame;
