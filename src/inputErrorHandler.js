const { Console } = require('@woowacourse/mission-utils');

const inputErrorHandler = (valdateFunc, input) => {
  try {
    valdateFunc(input);
    return true;
  } catch ({ message }) {
    Console.print(message);
    return false;
  }
};
