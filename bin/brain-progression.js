#!/usr/bin/env node

import game from '../src/index.js';
import gameProgression from '../src/games/game-progression.js';

game(gameProgression, 'What number is missing in the progression?');
