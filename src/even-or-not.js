import readlineSync from 'readline-sync';
import randomNum from './randomNum.js';
import isEven from './isEven.js';
import rightAnswer from './rightAnswer.js';

const evenOrNot = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number1 = randomNum(1, 100);
  const answerForNumber1 = rightAnswer(number1);
  console.log(number1);
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes' && isEven(number1) === true) {
    console.log('Correct!');
  } else if (answer === 'no' && isEven(number1) === false) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerForNumber1}'.`);
  }
};

export default evenOrNot;
