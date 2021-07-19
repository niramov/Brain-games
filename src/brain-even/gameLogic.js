import getRandomInt from '../getRandomInt.js';

export const gameDescription = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const question = () => {
  const num = getRandomInt(1, 100);
  console.log(`Question: ${num}`);
  return num;
};

export const correct = (x) => {
  if (x % 2 === 0) {
    return 'yes';
  }

  return 'no';
};
