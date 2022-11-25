const { Random } = require('@woowacourse/mission-utils');
const { GAME_NUMBER } = require('../constants/condition.js');

const randomNumberMaker = () => {
  const numbers = new Set();

  while (numbers.size !== GAME_NUMBER.length) {
    const randomNumber = Random.pickNumberInRange(GAME_NUMBER.minRange, GAME_NUMBER.maxRange);
    numbers.add(randomNumber);
  }

  return [...numbers];
};

module.exports = randomNumberMaker;
