import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('What is the result of the expression?');

  // eslint-disable-next-line space-in-parens
  for (let i = 1; i <= 3; ) {
    const operators = ['+', '*', '-'];

    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operator = operators[getRandomInt(0, 2)];

    const expression = `${num1} ${operator} ${num2}`;

    // eslint-disable-next-line no-eval
    const correctAnswer = eval(expression);
    console.log(`Question: ${expression}`);

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
