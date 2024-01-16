function accum(s) {
  let repeatCounter = 0;

  // Make all characters of the string uppercase
  s = s.toUpperCase();

  // Convert string to array of characters
  s = s.split("");

  // Iterate through each character and build the repeated string
  for (let i = 0; i < s.length; i++) {
    // Build the repeated part in lowercase
    let repeatedPart = s[i].toLowerCase().repeat(i + 1);

    // Capitalize the first character of the repeated part and reuduce the added lower case by 1
    repeatedPart = repeatedPart.charAt(0).toUpperCase() + repeatedPart.slice(1);

    // Replace the original character with the modified repeated part in the array
    s.splice(i, 1, repeatedPart);
  }

  // Convert the array back into a string with a specified delimiter
  return s.join("-");
}
