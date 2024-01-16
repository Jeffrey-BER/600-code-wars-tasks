function countSheeps(sheep) {
  let sheepsPresent = 0;

  for (let i = 0; i < sheep.length; i++) {
    // Check if the value at the current index is true
    if (sheep[i]) {
      sheepsPresent += 1;
    }
  }
  return sheepsPresent;
}

const sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(sheep));
