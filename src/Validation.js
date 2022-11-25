class Validation {
  static validateUserNumbers(input) {
    return this.#hasOnlyNumber(input);
  }

  static #hasOnlyNumber(input) {
    return input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }
}

module.exports = Validation;
