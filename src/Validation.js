class Validation {
  static validateUserNumbers(input) {
    if (!this.#hasOnlyNumber(input)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되었습니다.');
    }

    if (this.#hasValidLength(input)) {
      throw new Error('[ERROR] 숫자의 길이가 올바르지 않습니다.');
    }

    if (this.#hasOnlyUniqueNumber(input)) {
      throw new Error('[ERROR] 중복된 숫자가 입력되었습니다.');
    }

    if (this.#hasOnlyValidRangeNumber(input)) {
      throw new Error('[ERROR] 숫자의 범위가 올바르지 않습니다.');
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

  static #hasOnlyUniqueNumber(input) {
    const duplicateCheck = new Set(input);

    return duplicateCheck.length === input.length;
  }

  static #hasOnlyValidRangeNumber(input) {
    input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Validation.#isValidRangeNumber);
  }

  static #isValidRangeNumber(number) {
    return 1 < number && number < 9;
  }
}

module.exports = Validation;
