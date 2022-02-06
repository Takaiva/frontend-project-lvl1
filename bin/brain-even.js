#!/usr/bin/env node

import gameEven from '../src/games/game-even.js';
import game from '../src/index.js';

// Launching a game
game(gameEven, 'Answer "yes" if the number is even, otherwise answer "no"');
