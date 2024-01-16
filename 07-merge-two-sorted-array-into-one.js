function mergeArrays(arr1, arr2) {
  // Creating a new empty array
  let sortedArr = [];
  // Check if both arrays are empty. If so, return an empty array
  if (arr1.length === 0 && arr2.length === 0) {
    return sortedArr;
  }
  // Merging both arrays into one
  // 1. push the first array in sortedArr
  //    but just do that if the array contains numbers
  if (arr1.length > 0) {
    for (let i = 0; i < arr1.length; i++) {
      sortedArr.push(arr1[i]);
    }
  }
  // 2. push the secound array in sortedArr
  // Iterate through the arrays and push values into the new array
  if (arr2.length > 0) {
    for (let i = 0; i < arr2.length; i++) {
      sortedArr.push(arr2[i]);
    }
  }
  // Sorting the sortedArr by values.
  // (a, b) => a - b: This part is a custom comparison function.
  // It's an arrow function that takes two parameters a and b,
  // which represent two elements being compared during the sorting process.
  // If the result of the subtraction a - b is negative, it means a should be placed before b.
  // If the result is positive, it means b should be placed before a.
  // If the result is zero, it means a and b are considered equal in 
  // terms of sorting, and their relative order won't be changed.
  sortedArr.sort((a, b) => a - b);
  // Removing duplicates: 
  sortedArr = [...new Set(sortedArr)];
  // Return the final sorted array
  return sortedArr;
}
