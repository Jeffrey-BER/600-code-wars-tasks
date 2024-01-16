// Your task is to sum the differences between consecutive pairs in the array in Ascending order.
function sumOfDifferences(arr) {
  // Checking if the given array is empty ore has just 1 item
  if (arr.length <= 1) {
    return 0;
  }

  arr.reverse();

  let subSumArr = []; // init a empty array
  let compareOne = 0; // init a var. with the value of 0;
  let compareTwo = 0; // init a var. with the value of 0;
  let resultSub = 0; // init a var. with the value of 0;
  let resultFinal = 0; // init a var. with the value of 0;

  // Filling the subSumArr with diffrences:
  for (let i = 0; i < arr.length - 1; i++) {
    compareOne = arr[i];
    compareTwo = arr[i + 1];
    resultSub = compareOne - compareTwo;
    subSumArr[i] = resultSub;
  }

  // Check if in the subSUmArr is more then 1 entry if so return subSumArr
  if (subSumArr.length === 1) {
    return subSumArr;
  }
  // calculating the sum of the subSum Array
  for (let i = 0; i < subSumArr.length; i++) {
    resultFinal = resultFinal + subSumArr[i];
  }
  return resultFinal;
}

console.log(sumOfDifferences([1, 2, 10])); // Result should be 9
console.log(sumOfDifferences([-3, -2, -1])); // Result should be 2
// Test a array with more then 3 entrys
console.log(sumOfDifferences([3, 2, -1, 5, 2])); // Result should be -> (-1) + (-3) + 6 + (-3) = -1
// Test from Code-Wars:
console.log(sumOfDifferences([13, 2, 10, -3, 16, -12, -2, -17, 14, 9, -8, 0])); // Result should be -13
console.log(
  sumOfDifferences([
    -11, 4, -9, -10, 2, 0, 16, -2, 2, 11, 11, -13, 13, -16, 8, 11, -17, -7, -11,
    -1, -2, -7, 8, 3, 11, 5,
  ])
); // Result should be 16

console.log(sumOfDifferences([-1, -5, -2, 3, -1, -3, 6, 7, -8, 10, 2, -10])); // Result should be -9
