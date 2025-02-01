const data = Deno.readTextFileSync('numbers.txt');

const findFuelRequired = (totalFuelRequired, mass) => {
  return totalFuelRequired + Math.floor(mass / 3) - 2;
};

const sumOfFuelRequired = data.split("\n").reduce(findFuelRequired, 0);

console.log(sumOfFuelRequired);