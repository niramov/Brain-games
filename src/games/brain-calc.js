import getRandomInt from '../utilities.js';

const description = 'What is the result of the expression?';

const operators = ['+', '*', '-'];

const getExpressionValue = (a, b, operation) => {
  if (operation === '+') {
    return String(a + b);
  } if (operation === '*') {
    return String(a * b);
  }
  return String(a - b);
};

const getNewRound = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const randomIndex = getRandomInt(0, operators.length);
  const operator = operators[randomIndex];
  const question = `${num1} ${operator} ${num2}`;

  const correctAnswer = getExpressionValue(num1, num2, operator);

  return [question, correctAnswer];
};

export default { description, getNewRound };
