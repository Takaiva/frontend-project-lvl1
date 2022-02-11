import getRandomNum from '../functions/randomNum.js';
import gcd from '../functions/gcd.js';

const gameGcd = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const correctAnswer = gcd(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

export default gameGcd;
