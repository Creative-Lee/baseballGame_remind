const { INPUT_ERROR_MSG } = require('../src/constants/message.js');
const { GAME_NUMBER } = require('../src/constants/condition.js');

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
    return input.length === GAME_NUMBER.length;
  }

  static #hasOnlyUniqueNumber(input) {
    const duplicateCheck = new Set(input);

    return duplicateCheck.size === input.length;
  }

  static #hasOnlyValidRangeNumber(input) {
    input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Validation.#isValidRangeNumber);
  }

  static #isValidRangeNumber(number) {
    return GAME_NUMBER.minRange < number && number < GAME_NUMBER.maxRange;
  }
}

module.exports = Validation;
