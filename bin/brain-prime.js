#!/usr/bin/env node
import {
  gameDescription,
  question,
  correct,
} from '../src/game-prime/gameLogic.js';
import startGame from '../src/index.js';

startGame(gameDescription, question, correct);
