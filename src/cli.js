import readlineSync from 'readline-sync';

const welcome = () => {
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);
};
export default welcome;
