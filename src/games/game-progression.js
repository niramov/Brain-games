import getRandomInt from '../utilities.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const result = [];
  const firstNum = getRandomInt(1, 30);
  const progressionStep = getRandomInt(1, 11);
  const progressionLength = 9;

  for (let i = firstNum; result.length <= progressionLength; i += progressionStep) {
    result.push(i);
  }
  return result;
};

const getNewRound = () => {
  const progression = getProgression();

  const hiddenNum = getRandomInt(1, 10);

  const correctAnswer = String(progression[hiddenNum]);

  progression[hiddenNum] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default { description, getNewRound };
