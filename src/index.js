import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const startGame = (gameDescription, question, correct) => {
  const name = welcome();
  gameDescription();

  // eslint-disable-next-line space-in-parens
  for (let i = 1; i <= 3; ) {
    const value = question();
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correct(value);

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
