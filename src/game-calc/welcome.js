import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

export default welcome;
