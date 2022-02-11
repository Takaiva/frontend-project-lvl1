import readlineSync from 'readline-sync';

const game = (dataOfGame, rule) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  const success = `Congratulations, ${userName}!`;
  const fail = `Let's try again, ${userName}!`;

  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [num, correctAnswer] = dataOfGame();

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );
      console.log(fail);
      return false;
    }
  }
  console.log(success);
  return true;
};

export default game;
