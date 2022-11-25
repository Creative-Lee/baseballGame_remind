class Computer {
  #randomNumbers;

  setRandomNumbers(randomNumbers) {
    this.#randomNumbers = randomNumbers;
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
