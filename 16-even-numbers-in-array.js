// DESCRIPTION:
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  let newArray = [];
  // Reversing the array
  array.reverse();
  // Going through the array and storing the even numbers in a new array
  // If the length of the array is equal to the number, return the current new array
  for (let i = 0; i < array.length; i++) {
    if (newArray.length === number) {
      newArray.reverse();
      return newArray;
    }
    if (array[i] % 2 === 0) {
      // Push the even number to the new array
      newArray.push(array[i]);
    }
  }
  // If the loop completes without reaching the desired number of even numbers,
  // return the current new array
  return newArray;
}
