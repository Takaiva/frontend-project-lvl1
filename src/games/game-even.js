import getRightAnswer from '../functions/rightAnswer.js';
import getRandomNum from '../functions/randomNum.js';
import isEven from '../functions/isEven.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const num = getRandomNum(1, 100);
  const correctAnswer = getRightAnswer(num, isEven);
  return [num, correctAnswer];
};

export { gameEven, rule };
