import randomNum from '../functions/randomNum.js';
import randomItem from '../functions/randomItem.js';
import expressionResult from '../functions/expressionResult.js';

const gameCalc = () => {
  const operators = ['+', '-', '*'];
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const operator = randomItem(operators);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = expressionResult(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default gameCalc;
