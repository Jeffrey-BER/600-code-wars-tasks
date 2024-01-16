// Function to remove an exclamation mark from the end of a string
function remove(string) {
  let newString = "";
  if (string[string.length - 1] === "!") {
    // -1 has to be added because a string is zero based and the .length is not
    newString = string.slice(0, -1); // createsa a new string beginning from index 0 of the old string and slices  the last caracter
    return newString;
  } else {
    return string;
  }
}
