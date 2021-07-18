import readlineSync from 'readline-sync';
import isPrimeNum from './isPrimeNum.js';
import getRandomInt from './getRandomInt.js';

const startGame = (name) => {
  // eslint-disable-next-line space-in-parens
  for (let i = 1; i <= 3; ) {
    const num = getRandomInt(1, 100);

    const correctAnswer = isPrimeNum(num);

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

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
