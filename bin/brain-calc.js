#!/usr/bin/env node
import {
  gameDescription,
  correct,
  question,
} from '../src/brain-calc/gameLogic.js';
import startGame from '../src/index.js';

startGame(gameDescription, question, correct);
