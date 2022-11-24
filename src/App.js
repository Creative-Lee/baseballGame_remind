const { Console } = require('@woowacourse/mission-utils');
const GameController = require('./GameController.js');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const gameController = new GameController();
    gameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
