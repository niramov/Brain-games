import readlineSync from 'readline-sync';
import isPrimeNum from './isPrimeNum.js';
import getRandomInt from './getRandomInt.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

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
