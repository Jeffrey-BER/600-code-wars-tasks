function repeatStrV1(n, s) {
  let repeatedString = [];

  for (let i = 0; i < n; i++) {
    repeatedString += s;
  }
  return repeatedString;
}

// Function to repeat a string called s by n-times
function repeatStrV2(n, s) {
  let repeatedString = s.repeat(n);
  return repeatedString;
}

console.log(repeatStrV1(3, "Ha"));
console.log(repeatStrV2(3, "Ha"));
