import getRandomItem from '../functions/randomItem.js';
import getRandomNum from '../functions/randomNum.js';

const getProgression = (initialNum, step, itemCount) => {
  const progression = [];
  let num = initialNum;
  for (let i = 0; i < itemCount; i += 1) {
    progression.push(num);
    num += step;
  }
  return progression;
};

const gameProgression = () => {
  const steps = [2, 3, 5, 7];
  const itemCount = getRandomNum(5, 10);
  const step = getRandomItem(steps);
  const initialNum = getRandomNum(1, 50);
  const progression = getProgression(initialNum, step, itemCount);

  const indexOfHiddenItem = getRandomNum(0, progression.length - 1);
  const hiddenItem = progression[indexOfHiddenItem];
  progression[indexOfHiddenItem] = '..';
  const question = `${progression.join(' ')}`;
  const correctAnswer = hiddenItem.toString();
  return [question, correctAnswer];
};

export default gameProgression;
