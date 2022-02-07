const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let flag = 0;
  for (let i = 2; i <= num / 2 + 1; i += 1) {
    if (num % i === 0) {
      flag = 1;
    }
    if (flag === 1) {
      return false;
    }
  }
  return true;
};

export default isPrime;
