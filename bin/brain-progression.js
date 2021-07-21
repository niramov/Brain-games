#!/usr/bin/env node
import startGame from '../src/index.js';
import {
  gameDescription,
  question,
  correct,
} from '../src/game-progression/gameLogic.js';

startGame(gameDescription, question, correct);
