const INPUT_ERROR_MSG = {
  invalidType: '[ERROR] 숫자가 아닌 문자가 포함되었습니다.',
  invalidLength: '[ERROR] 숫자의 길이가 올바르지 않습니다.',
  duplicated: '[ERROR] 중복된 숫자가 입력되었습니다.',
  invalidRange: '[ERROR] 숫자의 범위가 올바르지 않습니다.',
};

const REQUEST_MSG = {
  userNumber: '숫자를 입력해주세요',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const GAME_START_MSG = '숫자 야구 게임을 시작합니다.';
const GAME_END_MSG = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

module.exports = { INPUT_ERROR_MSG, REQUEST_MSG, GAME_START_MSG, GAME_END_MSG };
