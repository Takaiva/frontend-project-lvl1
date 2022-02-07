import readlineSync from 'readline-sync';
import randomNum from '../functions/randomNum.js';
import randomItem from '../functions/randomItem.js';
import expressionResult from '../functions/expressionResult.js';

const gameCalc = () => {
  const operators = ['+', '-', '*'];
  let roundCount = 0;
  for (; roundCount < 3; roundCount += 1) {
    const number1 = randomNum(1, 100);
    const number2 = randomNum(1, 100);
    const operator = randomItem(operators);
    const correctAnswer = expressionResult(number1, number2, operator);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === expressionResult(number1, number2, operator)) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );
      return false;
    }
  }
  return true;
};

export default gameCalc;
