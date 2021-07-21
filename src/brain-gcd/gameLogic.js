import getRandomInt from '../getRandomInt.js';

// eslint-disable-next-line operator-linebreak
export const gameDescription =
  'Find the greatest common divisor of given numbers.';

export const question = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  console.log(`Question: ${num1} ${num2}`);
  const numbers = [num1, num2];
  return numbers;
};

// eslint-disable-next-line consistent-return
export const correct = (numbers) => {
  const num1 = numbers[0];
  const num2 = numbers[1];

  let result;

  if (num1 === num2) {
    result = String(num2);
    return result;
  }

  if (num1 > num2) {
    if (num1 % num2 === 0) {
      result = String(num2);
      return result;
    }
    for (let i = num2 - 1; ; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = String(i);
        return result;
      }
    }
  } else if (num2 > num1) {
    if (num2 % num1 === 0) {
      result = String(num1);
      return result;
    }
    for (let i = num1 - 1; ; i -= 1) {
      if (num2 % i === 0 && num1 % i === 0) {
        result = String(i);
        return result;
      }
    }
  }
};
