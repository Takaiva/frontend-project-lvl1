import getRandomNum from '../functions/randomNum.js';
import getRandomItem from '../functions/randomItem.js';
import isPrime from '../functions/isPrime.js';
import getRightAnswer from '../functions/rightAnswer.js';

const gamePrime = () => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  const random = ['Prime', 'NotPrime'];
  let number = 0;
  const primeOrNot = getRandomItem(random);
  if (primeOrNot === 'Prime') {
    number = getRandomItem(primeNumbers);
  } else {
    number = getRandomNum(2, 100);
    while (isPrime(number) === true) {
      number = getRandomNum(2, 100);
    }
  }
  const question = `${number}`;
  const correctAnswer = getRightAnswer(number, isPrime);
  return [question, correctAnswer];
};

export default gamePrime;
