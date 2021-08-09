import getRandomInt from '../getRandomInt.js';

// eslint-disable-next-line operator-linebreak
const game = {};
game.gameDescription =
  'Answer "yes" if the number is prime, otherwise answer "no".';

const getNewRound = () => {
  const gameConditions = [];
  const num = getRandomInt(1, 100);
  const question = num;

  const isPrimeNum = (x) => {
    if (x === 1) {
      return 'no';
    }
    for (let i = x - 1; i > 1; i -= 1) {
      if (x % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const correctAnswer = isPrimeNum(num);
  gameConditions.push(question, correctAnswer);

  return gameConditions;
};

game.getNewRound = getNewRound;

export default game;
