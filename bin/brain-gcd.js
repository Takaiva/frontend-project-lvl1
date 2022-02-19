#!/usr/bin/env node

import game from '../src/index.js';
import { gameGcd, rule } from '../src/games/game-gcd.js';

game(gameGcd, rule);
