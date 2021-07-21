import getRandomInt from '../getRandomInt.js';

// eslint-disable-next-line operator-linebreak
export const gameDescription =
  'Answer "yes" if the number is prime, otherwise answer "no".';

export const question = () => {
  const num = getRandomInt(1, 100);

  console.log(`Question: ${num}`);

  return String(num);
};

export const correct = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
