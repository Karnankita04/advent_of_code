const data = Deno.readTextFileSync('numbers.txt');

const findFuelRequired = (addedMass, mass) => {
  return addedMass + Math.floor(mass / 3) - 2;
};

const sumOfFuelRequired = data.split("\n").reduce(findFuelRequired, 0);

console.log(sumOfFuelRequired);