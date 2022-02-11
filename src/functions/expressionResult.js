export default (num1, num2, operator) => {
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
