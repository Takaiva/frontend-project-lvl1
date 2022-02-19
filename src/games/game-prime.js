import getRandomNum from '../functions/randomNum.js';
import isPrime from '../functions/isPrime.js';
import getRightAnswer from '../functions/rightAnswer.js';

const rule = 'Answer "yes" if the given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const number = getRandomNum(2, 100);
  const question = `${number}`;
  const correctAnswer = getRightAnswer(number, isPrime);
  return [question, correctAnswer];
};

export { gamePrime, rule };
