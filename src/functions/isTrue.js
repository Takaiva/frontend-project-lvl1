import isEven from './isEven.js';

const isTrue = (userAnswer, num) => {
  if (userAnswer === 'yes' && isEven(num) === true) {
    return true;
  }
  if (userAnswer === 'no' && isEven(num) === false) {
    return true;
  }
  return false;
};

export default isTrue;
