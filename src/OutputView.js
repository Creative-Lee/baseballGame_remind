const { Console } = require('@woowacourse/mission-utils');
const TemplateMaker = require('./utils/TemplateMaker.js');

const OutputView = {
  printResult(result) {
    const resultTemplate = TemplateMaker.getResultTemplate(result);

    Console.print(resultTemplate);
  },
};

module.exports = OutputView;
