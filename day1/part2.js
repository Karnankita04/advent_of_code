const data = Deno.readTextFileSync('input.txt');

const calculateFuelRequirement = (totalFuelRequired,mass) => {
  let currentMass = Math.floor(mass / 3 - 2);
  let totalFuel = 0;

  while (currentMass > 0) {
    totalFuel += currentMass;
    currentMass = Math.floor(currentMass / 3 - 2);
  }

  return totalFuelRequired + totalFuel;
};

const fuel = data.split("\n").reduce(calculateFuelRequirement, 0);

console.log(fuel);

const main