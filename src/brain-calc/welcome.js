import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('What is the result of the expression?');
  return name;
};

export default welcome;
