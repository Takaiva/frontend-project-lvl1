import getRightAnswer from '../functions/rightAnswer.js';
import getRandomNum from '../functions/randomNum.js';
import isEven from '../functions/isEven.js';

const gameEven = () => {
  const num = getRandomNum(1, 100);
  const correctAnswer = getRightAnswer(num, isEven);
  return [num, correctAnswer];
};

export default gameEven;
