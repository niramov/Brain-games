import readlineSync from 'readline-sync';
import isEvenNum from './isEvenNum.js';
import getRandomInt from './getRandomInt.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // eslint-disable-next-line space-in-parens
  for (let i = 1; i <= 3; ) {
    const num = getRandomInt(1, 100);

    const correctAnswer = isEvenNum(num);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === isEvenNum(num)) {
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
