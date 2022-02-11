import getRandomItem from '../functions/randomItem.js';
import getRandomNum from '../functions/randomNum.js';

const gameProgression = () => {
  const steps = [2, 3, 5, 7];

  const array = [];
  const itemsCount = getRandomNum(5, 10);
  const step = getRandomItem(steps);
  let initialNum = getRandomNum(1, 50);

  for (let i = 0; i < itemsCount; i += 1) {
    initialNum += step;
    array.push(initialNum);
  }
  const indexOfHiddenItem = getRandomNum(0, array.length - 1);
  const hiddenItem = array[indexOfHiddenItem];
  array[indexOfHiddenItem] = '..';
  const question = `${array.join(' ')}`;
  const correctAnswer = hiddenItem.toString();
  return [question, correctAnswer];
};

export default gameProgression;
