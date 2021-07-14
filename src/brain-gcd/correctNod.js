// eslint-disable-next-line consistent-return
const correctNod = (x, y) => {
  if (x === y) {
    return y;
  }

  if (x > y) {
    if (x % y === 0) {
      return y;
    }
    for (let i = y - 1; ; i -= 1) {
      if (x % i === 0 && y % i === 0) {
        return i;
      }
    }
  } else if (y > x) {
    if (y % x === 0) {
      return x;
    }
    for (let i = x - 1; ; i -= 1) {
      if (y % i === 0 && x % i === 0) {
        return i;
      }
    }
  }
};

export default correctNod;
