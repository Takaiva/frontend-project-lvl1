import getRandomNum from '../functions/randomNum.js';

const rule = 'What number is missing in the progression?';

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
  const itemCount = getRandomNum(5, 10);
  const step = getRandomNum(1, 10);
  const initialNum = getRandomNum(1, 50);
  const progression = getProgression(initialNum, step, itemCount);

  const indexOfHiddenItem = getRandomNum(0, progression.length - 1);
  const hiddenItem = progression[indexOfHiddenItem];
  progression[indexOfHiddenItem] = '..';
  const question = `${progression.join(' ')}`;
  const correctAnswer = hiddenItem.toString();
  return [question, correctAnswer];
};

export { gameProgression, rule };
