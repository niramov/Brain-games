import getRandomInt from '../getRandomInt.js';

export const gameDescription = () => {
  console.log('What is the result of the expression?');
};

export const question = () => {
  const operators = ['+', '*', '-'];

  const num1 = getRandomInt(1, 50);

  const num2 = getRandomInt(1, 50);

  const operator = operators[getRandomInt(0, 2)];

  const expression = `${num1} ${operator} ${num2}`;

  console.log(`Question: ${expression}`);

  return expression;
};

export const correct = (expression) => {
  // eslint-disable-next-line no-eval
  const result = String(eval(expression));
  return result;
};
