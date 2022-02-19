#!/usr/bin/env node

import game from '../src/index.js';
import { gamePrime, rule } from '../src/games/game-prime.js';

game(gamePrime, rule);
