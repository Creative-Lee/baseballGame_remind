const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('./constants/message.js');

const InputView = {
  requestUserNumbers(callback) {
    Console.readLine(REQUEST_MSG.userNumber, callback);
  },

  requestRestartCommand(callback) {
    Console.readLine(REQUEST_MSG.restart, callback);
  },
};

module.exports = InputView;
