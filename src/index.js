import readlineSync from 'readline-sync';

const game = (typeOfGame, rule) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  const success = (`Congratulations, ${userName}!`);
  const fail = (`Let's try again, ${userName}!`);

  console.log(`Hello, ${userName}!`);

  console.log(rule);

  if (typeOfGame()) {
    return console.log(success);
  }
  return console.log(fail);
};

export default game;
