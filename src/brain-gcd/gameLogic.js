import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import correctNod from './correctNod.js';

const startGame = (name) => {
  // eslint-disable-next-line space-in-parens
  for (let i = 1; i <= 3; ) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);

    const correctAnswer = correctNod(num1, num2);
    console.log(`Question: ${num1} ${num2}`);

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
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
