import getRandomInt from '../getRandomInt.js';

const game = {};
game.gameDescription = 'What number is missing in the progression?';

const getNewRound = () => {
  const gameConditions = [];

  let firstNum = getRandomInt(1, 30);

  const randomPlusNum = getRandomInt(1, 11);

  const correctProg = [];

  for (; correctProg.length <= 9; ) {
    correctProg.push(firstNum);
    firstNum += randomPlusNum;
  }

  const hiddenNum = getRandomInt(1, 10);

  const correctAnswer = String(correctProg[hiddenNum]);

  const hiddenSymbol = '..';

  correctProg[hiddenNum] = hiddenSymbol;

  const newArr = correctProg.join(' ');

  const question = newArr;

  gameConditions.push(question, correctAnswer);

  return gameConditions;
};

game.getNewRound = getNewRound;

export default game;
