function getCount(str) {
  // No checking nessesary...
  // Init a counter for vowels
  let counter = 0;

  // itterate over the given string:
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

// Best solution found on inet:

function getCountInetVersion(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
