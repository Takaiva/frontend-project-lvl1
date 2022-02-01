import readlineSync from 'readline-sync';
import randomNum from '../functions/randomNum.js';
import rightAnswer from '../functions/rightAnswer.js';
import isTrue from '../functions/isTrue.js';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const number3 = randomNum(1, 100);

  const questions = [number1, number2, number3];

  questions.every((num) => {
    const correctAnswer = rightAnswer(num);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isTrue(userAnswer, num) === true) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  });
  console.log(`Congratulations, ${userName}!`);
};

export default game;
