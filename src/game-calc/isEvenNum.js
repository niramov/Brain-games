import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';

const sumOfNum = () => {
  const num1 = getRandomInt(1, 30);
  const num2 = getRandomInt(1, 30);

  const userAnswer = readlineSync.question(`Question: ${num1} + ${num2}`);

  const rightAnswer = num1 + num2;

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
  }
};

export default sumOfNum;
