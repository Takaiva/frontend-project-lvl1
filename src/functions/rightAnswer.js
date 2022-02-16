export default (num, checkingFunction) => {
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  if (checkingFunction(num) === true) {
    return yesAnswer;
  }
  return noAnswer;
};
