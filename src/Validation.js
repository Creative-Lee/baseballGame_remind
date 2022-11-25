const { INPUT_ERROR_MSG } = require('../src/constants/message.js');

class Validation {
  static validateUserNumbers(input) {
    if (!Validation.#hasOnlyNumber(input)) {
      throw new Error(INPUT_ERROR_MSG.invalidType);
    }

    if (!Validation.#hasValidLength(input)) {
      throw new Error(INPUT_ERROR_MSG.invalidLength);
    }

    if (!Validation.#hasOnlyUniqueNumber(input)) {
      throw new Error(INPUT_ERROR_MSG.duplicated);
    }

    if (!Validation.#hasOnlyValidRangeNumber(input)) {
      throw new Error(INPUT_ERROR_MSG.invalidRange);
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
