const { Console } = require('@woowacourse/mission-utils');
const TemplateMaker = require('./utils/TemplateMaker.js');
const { GAME_END_MSG } = require('./constants/message.js');

const OutputView = {
  printResult(result) {
    const resultTemplate = TemplateMaker.getResultTemplate(result);

    Console.print(resultTemplate);
  },

  printGameEndMsg() {
    Console.print(GAME_END_MSG);
  },
};

module.exports = OutputView;
