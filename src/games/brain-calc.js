import getRandomInt from '../getRandomInt.js';

const game = {};
game.gameDescription = 'What is the result of the expression?';

const getNewRound = () => {
  const gameConditions = [];
  const operators = ['+', '*', '-'];
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operator = operators[getRandomInt(0, 2)];
  const expression = `${num1} ${operator} ${num2}`;
  const question = expression;
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = String(num1 + num2);
  } else if (operator === '*') {
    correctAnswer = String(num1 * num2);
  } else {
    correctAnswer = String(num1 - num2);
  }

  gameConditions.push(question, correctAnswer);

  return gameConditions;
};

game.getNewRound = getNewRound;

export default game;
