import getRandomNum from '../functions/randomNum.js';
import getRandomItem from '../functions/randomItem.js';
import getExpressionResult from '../functions/expressionResult.js';

const gameCalc = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const operator = getRandomItem(operators);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getExpressionResult(
    number1,
    number2,
    operator,
  ).toString();
  return [question, correctAnswer];
};

export default gameCalc;
