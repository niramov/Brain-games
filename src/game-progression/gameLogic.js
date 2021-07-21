import getRandomInt from '../getRandomInt.js';

export const gameDescription = 'What number is missing in the progression?';

export const question = () => {
  let firstNum = getRandomInt(1, 30);

  const randomPlusNum = getRandomInt(1, 11);

  const correctProg = [];

  // eslint-disable-next-line space-in-parens
  for (; correctProg.length <= 9; ) {
    correctProg.push(firstNum);
    firstNum += randomPlusNum;
  }

  const hiddenNum = getRandomInt(1, 10);

  const hiddenSymbol = '..';

  const correctAnswer = correctProg[hiddenNum];

  correctProg[hiddenNum] = hiddenSymbol;

  const newArr = correctProg.join(' ');

  console.log(`Question: ${newArr}`);

  return correctAnswer;
};

export const correct = (num) => String(num);
