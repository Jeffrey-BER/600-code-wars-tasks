function getMiddle(s) {
  // Check if the given word is between 0 and 1000 characters
  if (s.length < 0 || s.length > 1000) {
    return "Input word out of scope!";
  }

  // Spacial Cases:
  // length === 1
  if (s.length === 1) {
    return s[0];
  }

  // check if the word is odd if so do:
  if (s.length % 2 !== 0) {
    let posIdentOdd = (s.length - 1) / 2;
    return s[posIdentOdd];
  }

  // iff the word is even do this:
  if (s.length % 2 === 0) {
    let posIdentEven1 = s.length / 2 - 1;
    let posIdentEven2 = s.length / 2;
    return s[posIdentEven1] + s[posIdentEven2];
  }
}
