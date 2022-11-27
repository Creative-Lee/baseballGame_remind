const Computer = require('../src/Computer.js');

describe('Computer 클래스 테스트', () => {
  describe('getStrikeCount 메서드 테스트', () => {
    test('비교 시 숫자와 자리까지 일치하는 개수를 return 해야 한다.', () => {
      const computer = new Computer([1, 2, 3]);
      const userNumbers = [1, 2, 3];

      const result = computer.getStrikeCount(userNumbers);

      expect(result).toBe(3);
    });
  });

  describe('getBallCount 메서드 테스트', () => {
    test('비교 시 숫자에 자리는 일치하지 않으면서, 포함되어 있는 개수를 return 해야 한다.', () => {
      const computer = new Computer([1, 2, 3]);
      const userNumbers = [2, 1, 3];

      const result = computer.getBallCount(userNumbers);

      expect(result).toBe(2);
    });
  });
});
