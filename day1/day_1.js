const part_1 = (input) => {
  const findFuelRequired = (totalFuelRequired, mass) => {
    return totalFuelRequired + Math.floor(mass / 3) - 2;
  };

  const sumOfFuelRequired = input.split("\n").reduce(findFuelRequired, 0);

  return sumOfFuelRequired;
};

const part_2 = (input) => {
  const calculateFuelRequirement = (totalFuelRequired, mass) => {
    let currentMass = Math.floor(mass / 3 - 2);
    let totalFuel = 0;

    while (currentMass > 0) {
      totalFuel += currentMass;
      currentMass = Math.floor(currentMass / 3 - 2);
    }

    return totalFuelRequired + totalFuel;
  };

  const fuel = input.split("\n").reduce(calculateFuelRequirement, 0);

  return fuel;
};

const main = () => {
  const input = Deno.readTextFileSync("input.txt");

  console.log(part_1(input));
  console.log(part_2(input));
};

main();