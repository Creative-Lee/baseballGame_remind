class Validation {
  static validateUserNumbers(input) {
    if (!this.#hasOnlyNumber(input)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되었습니다.');
    }
  }

  static #hasOnlyNumber(input) {
    return input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }
}

module.exports = Validation;
