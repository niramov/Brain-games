import readlineSync from 'readline-sync';
import isPrimeNum from './isPrimeNum.js';
import getRandomInt from './getRandomInt.js';

const startGame = (name) => {
  const num = getRandomInt(1, 100);

  const correctAnswer = isPrimeNum(num);

  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
