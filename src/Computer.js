const { Random } = require('@woowacourse/mission-utils');
const { GAME_NUMBER } = require('./constants/condition.js');

class Computer {
  #randomNumbers;

  initRandomNumbers() {
    const numbers = new Set();

    while (numbers.size !== GAME_NUMBER.length) {
      const randomNumber = Random.pickNumberInRange(GAME_NUMBER.minRange, GAME_NUMBER.maxRange);
      numbers.add(randomNumber);
    }

    this.#randomNumbers = [...numbers];
  }

  getStrikeCount(userNumbers) {
    return this.#randomNumbers.filter((randomNumber, index) => {
      return randomNumber === userNumbers[index];
    }).length;
  }

  getBallCount(userNumbers) {
    return this.#randomNumbers.filter((randomNumber, index) => {
      return userNumbers.includes(randomNumber) && userNumbers[index] !== randomNumber;
    }).length;
  }
}

module.exports = Computer;
