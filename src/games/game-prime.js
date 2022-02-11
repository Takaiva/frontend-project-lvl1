import randomNum from '../functions/randomNum.js';
import randomItem from '../functions/randomItem.js';
import isPrime from '../functions/isPrime.js';

const gamePrime = () => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  const random = ['Prime', 'NotPrime'];
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  let number = 0;
  const primeOrNot = randomItem(random);
  if (primeOrNot === 'Prime') {
    number = randomItem(primeNumbers);
  } else {
    number = randomNum(2, 100);
    while (isPrime(number) === true) {
      number = randomNum(2, 100);
    }
  }
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? yesAnswer : noAnswer;
  return [question, correctAnswer];
};

export default gamePrime;
