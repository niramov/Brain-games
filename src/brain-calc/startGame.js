import welcome from './welcome.js';
import gameLogic from './gameLogic.js';

const startGame = () => {
  const name = welcome();

  gameLogic(name);
};

export default startGame;
