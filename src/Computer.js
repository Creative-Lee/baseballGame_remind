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
}

module.exports = Computer;
