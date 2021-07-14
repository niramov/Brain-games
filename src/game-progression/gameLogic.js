import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';

const gameLogic = (name) => {
  // eslint-disable-next-line space-in-parens
  for (let i = 1; i <= 3; ) {
    let firstNum = getRandomInt(1, 30);

    const randomPlusNum = getRandomInt(1, 11);

    const firstArr = [];

    // eslint-disable-next-line space-in-parens
    for (; firstArr.length <= 9; ) {
      firstArr.push(firstNum);
      firstNum += randomPlusNum;
    }

    const hiddenNum = getRandomInt(1, 10);

    const hiddenSymbol = '..';

    const correctAnswer = String(firstArr[hiddenNum]);

    firstArr[hiddenNum] = hiddenSymbol;

    const newArr = firstArr.join(' ');

    console.log(`Question: ${newArr}`);

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

export default gameLogic;
