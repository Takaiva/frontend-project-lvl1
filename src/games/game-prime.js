import readlineSync from 'readline-sync';
import randomNum from '../functions/randomNum.js';
import randomItem from '../functions/randomItem.js';
import isPrime from '../functions/isPrime.js';
import isTruePrime from '../functions/isTruePrime.js';

const gamePrime = () => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  let roundCount = 0;
  const random = [0, 1];
  const yesAnswer = 'yes';
  const noAnswer = 'no';

  for (; roundCount < 3; roundCount += 1) {
    let number = 0;
    const primeOrNot = randomItem(random);
    if (primeOrNot === 0) {
      number = randomItem(primeNumbers);
    } else {
      number = randomNum(2, 100);
      while (isPrime(number) === true) {
        number = randomNum(2, 100);
      }
    }
    const correctAnswer = isPrime(number) ? yesAnswer : noAnswer;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isTruePrime(userAnswer, number) === true) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer. Correct answer was "${correctAnswer}"`,
      );
      return false;
    }
  }
  return true;
};

export default gamePrime;
