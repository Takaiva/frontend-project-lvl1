#!/usr/bin/env node

import game from '../src/index.js';
import { gameEven, rule } from '../src/games/game-even.js';

// Launching a game
game(gameEven, rule);
