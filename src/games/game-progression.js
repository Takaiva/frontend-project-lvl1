import readlineSync from 'readline-sync';
import randomItem from '../functions/randomItem.js';
import randomNum from '../functions/randomNum.js';

const gameProgression = () => {
  let roundCount = 0;
  const steps = [2, 3, 5, 7];

  for (; roundCount < 3; roundCount += 1) {
    const itemCount = randomNum(5, 10);
    const array = [];
    const step = randomItem(steps);
    let initialNum = randomNum(1, 50);

    for (let i = 0; i < itemCount; i += 1) {
      initialNum += step;
      array.push(initialNum);
    }
    const indexOfHiddenItem = randomNum(0, array.length - 1);
    const hiddenItem = array[indexOfHiddenItem];
    array[indexOfHiddenItem] = '..';
    console.log(`Question: ${array.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === hiddenItem) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer. Correct answer was "${hiddenItem}"`);
      return false;
    }
  }
  return true;
};

export default gameProgression;
