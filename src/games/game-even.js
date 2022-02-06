import readlineSync from 'readline-sync';
import rightAnswer from '../functions/rightAnswer.js';
import randomNum from '../functions/randomNum.js';
import isTrue from '../functions/isTrue.js';

const gameEven = () => {
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const number3 = randomNum(1, 100);

  const questions = [number1, number2, number3];
  /* eslint-disable-next-line */
  for (const num of questions) {
    const correctAnswer = rightAnswer(num);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isTrue(userAnswer, num) === true) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );
      return false;
    }
  }
  return questions;
};

export default gameEven;
