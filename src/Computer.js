const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #randomNumbers;

  initRandomNumbers() {
    const numbers = new Set();

    while (numbers.size !== 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }

    this.#randomNumbers = [...numbers];
  }

  getStrikeCount(userNumbers) {
    return this.#randomNumbers.filter((randomNumber, index) => {
      return randomNumber[index] === userNumbers[index];
    }).length;
  }

  getBallCount(userNumbers) {
    return this.#randomNumbers.filter((randomNumber, index) => {
      return (
        this.#randomNumbers.includes(randomNumber) && userNumbers[index] !== userNumbers[index]
      );
    }).length;
  }
}

module.exports = Computer;
