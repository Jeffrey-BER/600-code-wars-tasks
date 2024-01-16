function removeChar(str) {
  // 1 (start): This is the starting index of the substring. In this case,
  // it starts from the second character (index 1) of the original string.
  // -1 (end): This is the ending index of the substring. When the end
  // parameter is negative, it counts from the end of the string. In this case,
  // it goes up to (but does not include) the last character of the original string.
  return str.slice(1, -1);
}
