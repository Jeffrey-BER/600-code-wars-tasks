function findSmallestInt(args) {
  // Initialize the current number with the first element of the array
  let currentNum = args[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < args.length; i++) {
    // Compare the current number with the next number in the array
    if (currentNum > args[i]) {
      // If the next number is smaller, update the current number
      currentNum = args[i];
    }
  }
  return currentNum;
}

console.log(findSmallestInt([78, 56, 232, 12, 8])); //'Should return the smallest int 8');
console.log(findSmallestInt([78, 56, 232, 12, 18])); //'Should return the smallest int 12');
console.log(findSmallestInt([78, 56, 232, 412, 228])); //'Should return the smallest int 56');
console.log(findSmallestInt([78, 56, 232, 12, 0])); //'Should return the smallest int 0');
console.log(findSmallestInt([1, 56, 232, 12, 8])); //'Should return the smallest int 1');
