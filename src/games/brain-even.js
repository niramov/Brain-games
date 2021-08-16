import getRandomInt from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNewRound = () => {
  const num = getRandomInt(1, 100);
  const question = num;

  const isEven = (x) => {
    if (x % 2 === 0) {
      return 'yes';
    }

    return 'no';
  };

  const correctAnswer = isEven(num);

  return [question, correctAnswer];
};

export default { description, getNewRound };
