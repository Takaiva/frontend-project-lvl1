import isEven from './isEven.js';

const rightAnswer = (num) => {
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  if (isEven(num) === true) {
    return yesAnswer;
  }
  return noAnswer;
};

export default rightAnswer;
