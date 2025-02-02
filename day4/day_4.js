const areAdjacentDigitsSame = (number) => {
  let num = number;

  while (num) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit === num % 10) {
      return true;
    }
  }

  return false;
};

const areAllDigitsSame = (number) => {
  let num = number;

  while (num) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit !== num % 10) {
      return false;
    }
  }

  return true;
};

const areInIncreasingOrder = (number) => {
  let num = number;

  while (num) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit < num % 10) {
      return false;
    }
  }

  return true;
};

// use of some , every

const main = (range1, range2) => {
  let count = 0;

  for (let input = range1; input <= range2; input++) {
    if (
      (areAdjacentDigitsSame(input) && areInIncreasingOrder(input)) ||
      areAllDigitsSame(input)
    ) {
      console.log(input);
      count++;
    }
  }

  return count;
};

console.log(main(240298, 784956));
