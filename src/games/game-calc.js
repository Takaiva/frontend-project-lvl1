import getRandomNum from '../functions/randomNum.js';
import getRandomItem from '../functions/randomItem.js';

const rule = 'What is the result of the expression?';

const getExpressionResult = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return false;
  }
  return result;
};

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

export { gameCalc, rule };
