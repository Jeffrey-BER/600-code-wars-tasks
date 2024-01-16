// Sum Numbers
function sum(numbers) {
    // Check for an empty array and return 0 if so
    if (numbers.length === 0) {
      return 0;
    }
  
    // Check if the array contains just numbers, if not, return an error message.
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number") {
        return "Input is not an array of numbers";
      }
    }
  
    // Adding the numbers inside the array to a new variable
    let sumOfArray = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sumOfArray += numbers[i];
    }
  
    return sumOfArray;
  }