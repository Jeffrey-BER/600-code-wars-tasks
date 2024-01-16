function isIsogram(str) {
  // check if string.length is === 0, if so return true
  if (str.length === 0) {
    return true;
  }

  // make the string lowercase
  str = str.toLowerCase();

  // iterate over each letter and check for duplicates
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let currentCheckPos = i;

    for (let j = 0; j < str.length; j++) {
      // Check if the current position of the char we want to check for is the same as we want to compare
      // jump over that position when the current pos. is equal to wich we compare
      if (currentCheckPos === j) {
        j++;
      }

      if (currentChar === str[j]) {
        return false;
      }
    }
  }
  return true;
}
