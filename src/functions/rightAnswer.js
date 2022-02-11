import isEven from './isEven.js';

export default (num) => {
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  if (isEven(num) === true) {
    return yesAnswer;
  }
  return noAnswer;
};
