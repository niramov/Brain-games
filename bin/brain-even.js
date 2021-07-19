#!/usr/bin/env node
import startGame from '../src/index.js';
import {
  gameDescription,
  question,
  correct,
} from '../src/brain-even/gameLogic.js';

startGame(gameDescription, question, correct);
