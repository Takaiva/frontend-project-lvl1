import getRandomNum from '../functions/randomNum.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gameGcd = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const correctAnswer = gcd(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

export { gameGcd, rule };
