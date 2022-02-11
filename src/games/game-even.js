import rightAnswer from '../functions/rightAnswer.js';
import randomNum from '../functions/randomNum.js';

const gameEven = () => {
  const num = randomNum(1, 100);
  const correctAnswer = rightAnswer(num);
  return [num, correctAnswer];
};

export default gameEven;
