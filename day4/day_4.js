const areAdjacentDigitsSame = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (
      array[index] === array[index + 1] &&
      array[index] !== array[index + 2] &&
      array[index] !== array[index - 1]
    ) {
      return true;
    }
  }

  return false;
};

const areInIncreasingOrder = (array) => {
  return array.every((number, index) => {
    if (index === array.length - 1) return true;
    return number <= array[index + 1];
  });
};

const main = (range1, range2) => {
  let count = 0;

  for (let input = range1; input <= range2; input++) {
    const arr = (input + "").split("");

    if (areAdjacentDigitsSame(arr) && areInIncreasingOrder(arr)) {
      count++;
    }
  }

  return count;
};

console.log(main(240298, 784956));
