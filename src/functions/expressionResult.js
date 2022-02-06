import { cons, car, cdr, toString, isPair } from '@hexlet/pairs';

const expressionResult = (num1, num2, operator) => {
  const number1 = Number(num1);
  const number2 = Number(num2);
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      result = number1 * number2;
  }
  return result;
};
console.log(expressionResult(24, 42, '*'));
export default expressionResult;
