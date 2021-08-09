import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const play = (game) => {
  const name = welcome();
  const description = game.gameDescription;
  console.log(description);

  const maxNumOfRounds = 3;

  for (let i = 1; i <= maxNumOfRounds; i += 1) {
    const [question, correctAnswer] = game.getNewRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default play;
