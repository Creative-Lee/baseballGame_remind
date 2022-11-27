const COUNT_MSG = {
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
};

const resultTemplateMaker = ({ strikeCount, ballCount }) => {
  const template = [];

  if (ballCount) template.push(`${ballCount}${COUNT_MSG.ball}`);
  if (strikeCount) template.push(`${strikeCount}${COUNT_MSG.strike}`);
  if (!strikeCount && !ballCount) template.push(`${COUNT_MSG.nothing}`);

  return template.join(' ');
};

module.exports = resultTemplateMaker;
