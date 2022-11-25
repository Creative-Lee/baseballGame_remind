const BaseballGame = require('../src/BaseballGame.js');
const Computer = require('../src/Computer.js');
const randomNumberMaker = require('../src/utils/randomNumberMaker.js');

describe('BaseballGame 클래스 테스트', () => {
  describe('getCompareResult 메서드 테스트', () => {
    test('입력된 숫자와 컴퓨터 숫자를 비교한 결과를 객체로 return한다.', () => {
      const computer = new Computer();
      const randomNumbers = [1, 2, 3];
      computer.setRandomNumbers(randomNumbers);
      const baseballGame = new BaseballGame(computer);

      const result = baseballGame.getCompareResult('132');

      expect(result).toHaveProperty('strikeCount', 1);
      expect(result).toHaveProperty('ballCount', 2);
    });
  });
});
