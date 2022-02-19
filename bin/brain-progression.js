#!/usr/bin/env node

import game from '../src/index.js';
import { gameProgression, rule } from '../src/games/game-progression.js';

game(gameProgression, rule);
