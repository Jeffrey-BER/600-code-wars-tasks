function descendingOrder(n) {
  // Check if the input is of type Number.
  if (typeof n !== "number") {
    return 0;
  }
  // Check if the number is 0
  if (n === 0) {
    return 0;
  }

  // Convert the number to a string
  const numbersString = n.toString();

  // Convert the string of numbers to an array of integers
  const numbersArray = numbersString.split("").map(Number);

  // Sort the array in descending order
  numbersArray.sort((a, b) => b - a);

  // Convert the sorted array back to a string
  const resultString = numbersArray.join("");

  // Convert the result back to a number before returning. (10 means based on decimal)
  const resultNumber = parseInt(resultString, 10);

  return resultNumber;
}
