// Return masked string
function maskify(cc) {
  // Check if the arra length is less than 5
  if (cc.length < 5) {
    return cc; // If the length is less than 5, no masking needed, return the original string
  }

  // Mask all characters except the last 4
  const maskedPart = "#".repeat(cc.length - 4);
  // Exampl: cc = "testTest" -> maskedPart = ####

  // Concatenate the masked part with the last 4 characters
  return maskedPart + cc.slice(-4);
  // Exampl: #### + Test -> ####Test
}
