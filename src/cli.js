import readlineSync from 'readline-sync';

const welcome = () => {
  const name = readlineSync.question('May i have your name? ');
  return console.log(`Hi, ${name}!`);
};
export default welcome;
