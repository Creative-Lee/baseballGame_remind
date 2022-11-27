const Validation = require('../src/Validation.js');
const { INPUT_ERROR_MSG } = require('../src/constants/message.js');

describe('Validation 클래스 테스트', () => {
  const invalidType = ['asd', '   ', '!  '];
  const invalidLength = ['12', '1234'];
  const duplicatedNumber = ['112', '131'];
  const invalidRange = ['012', '890'];

  test.each(invalidType)('숫자 외의 값이 포함되어 있으면 에러가 발생한다.', (input) => {
    expect(() => {
      Validation.validateUserNumbers(input);
    }).toThrow(INPUT_ERROR_MSG.invalidType);
  });

  test.each(invalidLength)(
    '숫자의 길이가 지정된 조건과 일치하지 않으면 에러가 발생한다.',
    (input) => {
      expect(() => {
        Validation.validateUserNumbers(input);
      }).toThrow(INPUT_ERROR_MSG.invalidLength);
    }
  );

  test.each(duplicatedNumber)('중복된 숫자가 있으면 에러가 발생한다.', (input) => {
    expect(() => {
      Validation.validateUserNumbers(input);
    }).toThrow(INPUT_ERROR_MSG.duplicated);
  });

  test.each(invalidRange)('숫자의 범위가 지정된 조건을 벗어나면 에러가 발생한다.', (input) => {
    expect(() => {
      Validation.validateUserNumbers(input);
    }).toThrow(INPUT_ERROR_MSG.invalidRange);
  });
});
