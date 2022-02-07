#!/usr/bin/env node

import game from '../src/index.js';
import gameGcd from '../src/games/game-gcd.js';

game(gameGcd, 'Find the greatest common divisor of given numbers.');
