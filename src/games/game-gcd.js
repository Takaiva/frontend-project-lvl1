import readlineSync from 'readline-sync';
import randomNum from '../functions/randomNum.js';
import gcd from '../functions/gcd.js';

const gameGcd = () => {
  let roundCount = 0;
  for (; roundCount < 3; roundCount += 1) {
    const number1 = randomNum(1, 100);
    const number2 = randomNum(1, 100);
    const correctAnswer = gcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (gcd(number1, number2) === Number(userAnswer)) {
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

export default gameGcd;
