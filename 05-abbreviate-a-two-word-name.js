function abbrevName(name) {
  // look for a space inside the string and split the string & store each element in an array
  const arraySplitedStrings = name.split(" ");
  // go in each part of the array and remove all character except the first letter
  const modifiedArray = arraySplitedStrings.map(function (str) {
    // Keep only the first character of each string
    return str.length > 0 ? str[0] : "";
  });
  // join the two strings together with a third string "."
  const result = modifiedArray.join(".");
  return result;
}
