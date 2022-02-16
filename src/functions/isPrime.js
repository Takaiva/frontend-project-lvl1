const isPrime = (num) => {
  const sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};
export default isPrime;
