class Validation {
  static validateUserNumbers(input) {
    if (!this.#hasOnlyNumber(input)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되었습니다.');
    }

    if (this.#hasValidLength(input)) {
      throw new Error('[ERROR] 숫자의 길이가 올바르지 않습니다.');
    }
  }

  static #hasOnlyNumber(input) {
    return input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }

  static #hasValidLength(input) {
    return input.length === 3;
  }
}

module.exports = Validation;
