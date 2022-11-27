const { Console } = require('@woowacourse/mission-utils');
const resultTemplateMaker = require('./utils/resultTemplateMaker.js');
const { GAME_END_MSG } = require('./constants/message.js');

const OutputView = {
  printResult(result) {
    const resultTemplate = resultTemplateMaker(result);

    Console.print(resultTemplate);
  },

  printGameEndMsg() {
    Console.print(GAME_END_MSG);
  },
};

module.exports = OutputView;
