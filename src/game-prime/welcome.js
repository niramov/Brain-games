import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  return name;
};

export default welcome;
