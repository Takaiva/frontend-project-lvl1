import isPrime from './isPrime.js';

const isTruePrime = (userAnswer, num) => {
  if (userAnswer === 'yes' && isPrime(num) === true) {
    return true;
  }
  if (userAnswer === 'no' && isPrime(num) === false) {
    return true;
  }
  return false;
};

export default isTruePrime;
