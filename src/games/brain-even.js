import getRandomInt from '../getRandomInt.js';

const game = {};
game.gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const getNewRound = () => {
  const gameConditions = [];
  const num = getRandomInt(1, 100);
  const question = num;

  const isEven = (x) => {
    if (x % 2 === 0) {
      return 'yes';
    }

    return 'no';
  };

  const correctAnswer = isEven(num);

  gameConditions.push(question, correctAnswer);

  return gameConditions;
};

game.getNewRound = getNewRound;

export default game;
