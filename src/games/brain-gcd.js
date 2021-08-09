import getRandomInt from '../getRandomInt.js';

// eslint-disable-next-line operator-linebreak
const game = {};
game.gameDescription = 'Find the greatest common divisor of given numbers.';

const getNewRound = () => {
  const gameConditions = [];

  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;

  const getGcd = (x, y) => {
    let result;

    if (x === y) {
      result = String(y);
      return result;
    }

    if (x > y) {
      if (x % y === 0) {
        result = String(y);
        return result;
      }
      for (let i = y - 1; ; i -= 1) {
        if (x % i === 0 && y % i === 0) {
          result = String(i);
          return result;
        }
      }
    } else if (y > x) {
      if (y % x === 0) {
        result = String(x);
        return result;
      }
      for (let i = x - 1; ; i -= 1) {
        if (y % i === 0 && x % i === 0) {
          result = String(i);
          return result;
        }
      }
    }
    return result;
  };

  const correctAnswer = getGcd(num1, num2);
  gameConditions.push(question, correctAnswer);

  return gameConditions;
};

game.getNewRound = getNewRound;

export default game;
