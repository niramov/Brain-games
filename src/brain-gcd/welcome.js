import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');
  return name;
};

export default welcome;
