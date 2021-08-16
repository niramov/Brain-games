import getRandomInt from '../utilities.js';

const description = 'What is the result of the expression?';

const operators = ['+', '*', '-'];

const getNewRound = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;

  const getExpressionValue = (a, b, operation) => {
    let result;

    if (operation === '+') {
      result = String(a + b);
    } else if (operation === '*') {
      result = String(a * b);
    } else {
      result = String(a - b);
    }
    return result;
  };

  const correctAnswer = getExpressionValue(num1, num2, operator);

  return [question, correctAnswer];
};

export default { description, getNewRound };
