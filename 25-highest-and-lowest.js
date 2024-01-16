function highAndLow(numbers) {
    // Split the string into an array at all positions " "
    let arrayOfNumbers = numbers.split(" ").map(Number); // Convert each element to a number using map
    
    // Initialize two variables to store the highest and lowest numbers
    let highestNumber = arrayOfNumbers[0]; // Initialize with the smallest possible number
    let lowestNumber = arrayOfNumbers[0]; // Initialize with the largest possible number
    
    // Iterate through the array to find the highest and lowest numbers
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      // Check if the current number is greater than the current highest number
      if (arrayOfNumbers[i] > highestNumber) {
        highestNumber = arrayOfNumbers[i]; // Update the highest number
      }
      
      // Check if the current number is less than the current lowest number
      if (arrayOfNumbers[i] < lowestNumber) {
        lowestNumber = arrayOfNumbers[i]; // Update the lowest number
      }
    }
    
    // Concatenate the highest and lowest numbers into a string
    let result = highestNumber + " " + lowestNumber;
    
    return result; // Return the result string
  }